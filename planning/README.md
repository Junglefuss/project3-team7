# Hole in the Wall (backend)

An application for finding local bars and creating your own notes about them so you can find them later.  The backend portion provides the CRUD functionality for the database and is able to get the data from the Yelp API.

## Current Features

- Users can search for bars near them by entering any location into the search bar.
- Users can save their own bars and notes by simply entering their email (not authenticated)
- Users can see their comments by checking back on the bars that they saved.

## Backend Features
- Create users
- Create, read, update and delete comments
- Retrieve API data from yelp.

## Technologies Used

- Node.js and NPM
- Mongo DB and Mongoose
- Express

## Installation Instructions

To set up the app locally on your own system:

1. Fork and clone the [project repository](https://github.com/Junglefuss/project3-team7/tree/development)
2. Install all dependencies locally. (See package.json)
   ```
   bundle install
   ```
3. Run db/seed.js to seed your database.

4. Lastly, start up your server and navigate to the indicated port number in your browser.

## Contribute

- Source code: https://github.com/Junglefuss/project3-team7/wiki
- Issue Tracker: https://github.com/Junglefuss/project3-team7/issues
