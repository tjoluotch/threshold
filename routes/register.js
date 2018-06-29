var express = require('express');
var router = express.Router();

var User = require('../models/user');

/*
router.post('/registry', function (req, res, next) {

    console.log('Post attempt to registry endpoint made');

    var user = new  User({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        phoneNo: req.body.phoneNo
    });

    user.save(function (err, result) {
        if(err){
            return res.status(500).json({
                title: 'An error occurred when trying to enter details',
                error: err
            });
        }
        res.status(201).json({
            message: 'User details stored',
            obj: result
        });
    });

});
*/


module.exports = router;