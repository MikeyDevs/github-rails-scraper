# Welcome
This React GitHub API Scraper Web App utilizes React's state management to shallowly persist data set by real-time GET requests to the API for open issues from each specified label, with the ability to sort by ascending or descending comments. Jest and Enzyme were used for unit testing. No database is used in this project, though a boilerplate RESTful Node/Express API with MongoDB is stored for future use, if need be.

# How to Get Started
1. Download the folder and cd into the root of the folder with your command line interface.
2. Install dependencies by running "yarn install" or "npm install."
3. Run the app by typing "yarn start" or "npm start" on your CL. This should open at localhost:3000.

# How to Use
Click on any of the label buttons to fetch the open issues for that category. The API only allows 30 of the most recent open issues at a time. You can also choose to sort the data by number of comments in each topic in ascending or descending order. By default, the sorting order is descending. 