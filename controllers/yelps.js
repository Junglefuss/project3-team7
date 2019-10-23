const express = require('express');
const router = express.Router();

let yelpApi = require('yelp-api');

// Create a new yelpAPI object with your API key
let apiKey = 'iyEkKM7x92L8Mib8tCO0wRP8hUbwpc4xbAlyF_slEjQjcvc01lK0ytRA6VI81ogvn8aTuwIV7TMxTN_c7G48BAXQVOEZ5MCBd6PqNgGq5uq9P6jd3sQ7SHwU0vysXXYx';
let yelp = new yelpApi(apiKey);



router.get('/:location', (req, res) => {
    let params = [
        { location: req.params.location,
          term: 'bars',  
          limit: 3  
        },
    ];
    
    // Call the endpoint
    yelp.query('businesses/search', params)
    .then(data => {
      // Success
      let obj = data;
      obj = JSON.parse(data);
      res.json(obj);
      console.log(data);
    })
    .catch(err => {
      // Failure
      console.log(err);
    });
});

module.exports = router;
