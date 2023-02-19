import requests
from bs4 import BeautifulSoup
from datetime import datetime
import json

# Sun data section
sunData = []

url = 'https://www.timeanddate.com/sun/usa/seattle'

# make a request to the website
response = requests.get(url)
# parse the HTML content of the response
soup = BeautifulSoup(response.content, 'html.parser')
# find the section object with the class name of 'bk-focus'
bk_focus = soup.find('section', class_='bk-focus')
tableDiv = bk_focus.find('div', class_='bk-focus__info')
table = tableDiv.find('table')
tbody = table.find('tbody')
tr = tbody.find_all('tr')
sunrise = tr[5].find('td').text.strip().split(' ')
sunset = tr[6].find('td').text.strip().split(' ')

time1String = f'{sunrise[0]} am'
time2String = f'{sunset[0]} pm'

# Define the two times
time1 = datetime.strptime(time1String, '%I:%M %p')
time2 = datetime.strptime(time2String, '%I:%M %p')

# Convert the times to minutes since midnight
minutes1 = time1.hour * 60 + time1.minute
minutes2 = time2.hour * 60 + time2.minute

# Find the average of the two times in minutes
average_minutes = (minutes1 + minutes2) // 2

# Convert the average back to hours and minutes
hours = average_minutes // 60
minutes = average_minutes % 60

sunData.append({
    'solarMidnight': f'Midnight: {hours}:{minutes:02d} am',
    'sunriseTime': f'Sunrise: {sunrise[0]} am {sunrise[2]} {sunrise[3]}',
    'solarNoon': f'Solar Noon: {hours}:{minutes:02d} pm',
    'sunsetTime': f'Sunset: {sunset[0]} pm {sunset[2]} {sunset[3]}',
})

with open('sun.json', 'w') as f:
    json.dump(sunData, f)

# Moon data section

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

# Planetary Hours section
import requests
from bs4 import BeautifulSoup
import json
import datetime

# get the current date and time
now = datetime.datetime.now()

# extract the numerical day, month, and year from the date
day = now.day
month = now.month
year = now.year

# specify the URL of the website to scrape
url = (f"https://horoscopes.astro-seek.com/calculate-planetary-hours/?narozeni_city=Seattle%2C+USA%2C+Washington&narozeni_input_hidden=Seattle%2C+USA%2C+Washington&narozeni_hidden_local_tz=1&narozeni_stat_hidden=US&narozeni_podstat_hidden=Washington&narozeni_podstat_kratky_hidden=WA&narozeni_podstat2_kratky_hidden=&narozeni_podstat3_kratky_hidden=&narozeni_mesto_hidden=Seattle&narozeni_den={day}&narozeni_mesic={month}&narozeni_rok={year}&tolerance=1&narozeni_sirka_stupne=47&narozeni_sirka_minuty=36&narozeni_sirka_smer=0&narozeni_delka_stupne=122&narozeni_delka_minuty=20&narozeni_delka_smer=1#select_local_tz_anchor")

# send a GET request to the website and parse the HTML content
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# find the div with class name 'detail-rozbor-items'
detail_div = soup.find('div', {'class': 'detail-rozbor-items'})

# find the second table in the div
table = detail_div.find_all('table')[1]

# extract the data from the table rows
table_data = []
for row in table.find_all('tr'):
    # extract the data from the table cells
    row_data = []
    for cell in row.find_all('td'):
        # check if the cell has an img tag
        img = cell.find('img')
        if img is not None:
            # append the title attribute of the img tag as a string
            row_data.append(str(img.get('title')))
        else:
            # append the text content of the cell
            row_data.append(cell.get_text(strip=True))
    # append the row data to the table data
    table_data.append(row_data)

# write the table data to a JSON file
with open('planetaryHours.json', 'w') as f:
    json.dump(table_data, f)

# Ephemeris section
import requests
from bs4 import BeautifulSoup
import json

url = 'https://www.jessicaadams.com/astrology/current-planetary-positions/'

response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')

table = soup.find('table')

rows = table.find_all('tr')  # Skip the header row

data = []

for row in rows:
    columns = row.find_all('td')
    planet = columns[0].text.strip().split()[0]
    degree = columns[1].text.strip().split()[0]
    sign = columns[1].text.strip().split()[1]
    minutes = columns[1].text.strip().split()[2]
    seconds = columns[1].text.strip().split(' ')
    data.append({
        'planet': planet,
        'degree': degree,
        'sign': sign,
        'minutes': minutes,
        'seconds': seconds
    })

with open('ephemeris.json', 'w') as f:
    json.dump(data, f)

