var express = require('express');
var router = express.Router();

var Property = require('../models/property');

router.route ('/accomodation/london/:name')
    .all(function (req, res, next) {
        req.property_name = req.params.name; // Get the property name form the URI.
        next();
    })
    .get(function(req, res) {
        var property = new Property(req.property_name); // Find the property from data sources.

        if (property.getProperty() !== null) { // If property is valid.
            res.render('index', { property: property.getProperty() });
            //res.json(property.getProperty());
            property = null;
        } else { // The requested property doesn't exist.
            res.status(404).render('404', { message: 'The requested property does not exist' });
        }
    });

module.exports = router;