# Puppeteer Car Details Scraper

This project is a web scraper built with Puppeteer and `puppeteer-extra-plugin-stealth` to extract car details from a specific mobile.de car listing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project utilizes Puppeteer for headless browser automation and the `puppeteer-extra-plugin-stealth` to bypass detection mechanisms. It extracts specific car details such as make and model, title, price, kilometers, power, fuel type, transmission, and date of manufacturing from a given mobile.de car listing URL.

## Features

- Headless browser automation using Puppeteer
- Stealth plugin to avoid detection
- Extracts various car details from mobile.de
- Configurable user-agent and headers

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:
    ```sh
    git clone <https://github.com/nikicahecimovic/web-scraper.git>
    cd my-scraper
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the scraper with the URL of the car listing as a parameter:
    ```sh
    node scraper.js https://suchen.mobile.de/fahrzeuge/details.html?id=.....
    ```

2. The script will launch a headless browser, navigate to the specified URL, and extract the car details. The extracted details will be printed to the console.
3. 
## Project Structure

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Contains project metadata and dependencies.
- `package-lock.json`: Contains the exact versions of dependencies used.
- `README.md`: Project documentation.
- `scraper.js`: Main script for the web scraper.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
