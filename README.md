# My Weather Application

## Description
This project is a web app named **Weather App**, a weather application that is used to display information to a user about the different weather conditons for the particular city that they search for. If the coty that they input is not a valid city it returns an error for them to select a valid city recognized by the weather api.

The app uses the OpenWeather api that acts as the applications database for the city weather conditions and details. The app uses an api key to be able to fetch the data from the api. An API is a set of programming code that enables data transmission between one software product and another.

## Project Setup
### Getting Started
In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following: (Windows 7+, Linux, Mac OS)
- NPM
- The OpenWeather api key (Find how to get it below)

### Getting the api key
1. Go to your browser and enter the open weather url:

    https://openweathermap.org/

2. From there sign up or login if you are already a user.
3. Then select API from the navigation bar you will be directed to api section of the website.
4. Select the first option Current Weather Data to get the api that shows the current weather of the cities, unless you want different data then you can select a different option
5. To then get the api key, go to the dropdown where your profile is and select my api keys.
6. You will get the api key generated, but it will take an hour before the data is fetched and displayed.
7. Get back to step 4 and from the selection you chose select how you want to request:
* This is if you want to call using the city name;

    https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={APIkey}

* Calling using the city name and country code;

    https://api.openweathermap.org/data/2.5/weather?q={cityname},{countrycode}&appid={APIkey}

* Calling using the city name, state code, and country code;

    https://api.openweathermap.org/data/2.5/weather?q={cityname},{statecode},{countrycode}&appid={APIkey}

--> This enables you to get the weather data from the api.

### Installation of application

The installation steps below are described for a linux machine.\
To use this repo on your machine requires some simple steps

#### Alternative One (Cloning directly from my repository)
- Open a terminal / command line interface on your computer

- Clone the repo into your folder of choice by using the following:


        git clone git@github.com:Michelle-Mungai/Weather-Project.git

- Change directory to the repo folder:


        cd Weather-Project

- (Optional) Open it in Visual Studio Code

        code .

- (Alternate Option) Open it in any editor of your choice.

#### Alternative Two (Forking to your own repository)
- On the top right corner of this page there is a button labelled **Fork**.

- Click on that button to fork the repo to your own account.

- Take on the process in Alternative One above.

- Remember to use your username when cloning.


        git clone https://github.com/your-username-here/Weather-Project.git

### Running the application
To run the application is very easy once you have done the correct fetch request to the api and input the correct api key.

It will require you to just run the html file ensuring that it is correctly linked to the javascript file with the fetch and api key. Therefore it will require this procedure only:

- Open index.html by running in the terminal the command: `open index.html` or by navigating to the folder containing the index.html file through the file manager of your system and double-clicking on the file.

---
## Authors
This project was contributed to by:
- [Michelle Mungai](https://github.com/Michelle-Mungai)
## License
The project is under GNU GENERAL PUBLIC LICENSE Version 3