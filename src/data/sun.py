import requests
from bs4 import BeautifulSoup
from datetime import datetime
import json

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
    'solarMidnight': f'{hours}:{minutes:02d} am',
    'sunriseTime': f'{sunrise[0]} am',
    'sunriseDirection': f'{sunrise[2]} {sunrise[3]}',
    'solarNoon': f'{hours}:{minutes:02d} pm',
    'sunsetTime': f'{sunset[0]} pm',
    'sunsetDirection': f'{sunset[2]} {sunset[3]}'
})

with open('sun.json', 'w') as f:
    json.dump(sunData, f)
