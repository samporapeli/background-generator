#!/usr/bin/env python3

import sys
import time
from selenium import webdriver

url = "https://sampo.website/app/background/"
get_params = sys.argv[1]
download_path = sys.argv[2]

# Start firefox in headless mode
options = webdriver.firefox.options.Options()
options.add_argument("--headless")

# Configure automatic download of files
profile = webdriver.FirefoxProfile()
profile.set_preference("browser.helperApps.neverAsk.saveToDisk", "image/png")
profile.set_preference("browser.download.folderList", 2) 
profile.set_preference("browser.download.dir", download_path) 

# Load the page
driver = webdriver.Firefox(options=options, firefox_profile=profile)
driver.get(url + get_params)

# Wait and click download button
time.sleep(2)
driver.find_element_by_id("download-button").click()

