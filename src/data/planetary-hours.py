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
