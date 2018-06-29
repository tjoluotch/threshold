var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Threshold 10th Anniversary' });
  console.log("Home Page");
});

router.get('/registry', function (req, res, next) {
    res.render('registry', {title: 'Threshold 10th Anniversary'});
    console.log('Your in the registry page');
});

router.get('/success', function (req, res, next) {
    res.render('success', {title: 'Threshold 10th Anniversary'});
    console.log('Your in the successful registry page');
});

router.post('/registry', function (req, res, next) {

    console.log('Post attempt to registry endpoint made');

    //see whats in the body
    //console.log(req.body);

    var user = new  User({
        firstName: req.body.iFirstName,
        lastName: req.body.iLastName,
        email: req.body.iEmail,
        phoneNo: req.body.iPhoneNo
    });

    user.save(function (err, result) {
        if(err){
            return res.status(500).json({
                title: 'An error occurred when trying to enter details',
                error: err
            });
        }
        /*
        res.status(201).json({
            message: 'User details stored',
            obj: result
        });
        */
        res.redirect('/success');
    });
});







module.exports = router;
