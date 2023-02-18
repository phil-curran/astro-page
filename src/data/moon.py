import requests
from bs4 import BeautifulSoup
import json

moonData = []

noonAndMidnightUrl = 'https://www.timeanddate.com/sun/usa/seattle'

# make a request to the website
moonPhaseUrl = 'https://www.timeanddate.com/astronomy/usa/seattle'
response = requests.get(moonPhaseUrl)
# parse the HTML content of the response
soup = BeautifulSoup(response.content, 'html.parser')
# find the section object with the class name of 'bk-focus'
bk_focus = soup.find('section', class_='bk-focus')

# get moon percentage
h1 = bk_focus.find('div', class_='h1')
# find the child span element with an id of 'cur-moon-percent'
cur_moon_percent = h1.find('span', id='cur-moon-percent')
# get the innerText value of the span element as a string
moon_percent = cur_moon_percent.text.strip()
# print the value of the moon_percent variable

# get moon phase
ahref = bk_focus.find('a')
moon_phase = ahref.text.strip()

# get moonrise and moon set
riseAndSet = bk_focus.find('div', class_='bk-focus__info')
table = riseAndSet.find('table')
tbody = table.find('tbody')
tr = tbody.find_all('tr')
moonrise = tr[3].find('td').text.strip()
moonset = tr[4].find('td').text.strip()

moonData.append({
    'percent': moon_percent,
    'phase': moon_phase,
    'moonrise': moonrise,
    'moonset': moonset
    
})

with open('moon.json', 'w') as f:
    json.dump(moonData, f)
