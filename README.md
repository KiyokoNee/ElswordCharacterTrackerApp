# ElswordCharacterTrackerApp

## Description

A tracker application for Elsword Character Creation for the El Party Search Collection (ESPC) progress

## Features

- Display all created characters in the main dashboard
- Add Characters to the database with frontend form validations
- Update character details with same restrictions as creation
- Show details of an individual character
- Delete character fully from the database

## Prerequisites

Before you begin, ensure you have met the following requirements:
- JDK 11 or higher installed
- Maven for project building and dependencies management
- NPM installed
- A MySQL database set up

## Recommendations


- Although this project can be run in different IDEs, the development and testing was conducted in IntelliJ. If you run into difficulties due to using a different IDE, the development team may have a harder time assisting you.
- If you are using a different variant of SQL database, you will need to adjust the database connection via the application.properties file as well as correcting the dependencies to your chosen DB.
- If not already installed, MySQL Workbench will make viewing and monitoring the database much more straightforward.

## Usage

To run the Elsword Character Tracker: 
1) Open the project in an IDE
2) If necessary, right click the pom.xml file to set up the backend as a Maven project
3) Double check the application.properties file and see if you need to make any adjustments to the database credentials
4) Run the Application class file
5) If Spring does not launch correctly, be sure your pom.xml file dependencies are up to date
6) Open a new terminal
7) Move into the react folder using `cd client`
8) If this is your first time running the project, run `npm i` to install the required packages
9) Run `npm run dev`
10) When React is done initializing, open your browser 
11) Navigate to `http://localhost:5173` in your browser 
12) You can now use the application

## Contact

If you have any questions, please open an issue or contact the project maintainers.  
Project Link: [Elsword Tracker](https://github.com/KiyokoNee/ElswordCharacterTrackerApp)  
Primary Contact: k.c.gearing@gmail.com

