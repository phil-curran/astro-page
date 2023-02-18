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
