
//countdown timer code
var countdownDate = new Date("Jun 30, 2018 10:30:00").getTime();

var update = setInterval(function () {

    var now = new Date().getTime();

    var distance = countdownDate - now;

    // Because its all in Miliseconds - times by 1000 then by the unit of time
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("ct").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if(distance < 0){
        clearInterval(update);
        document.getElementById("ct").innerHTML = "We are live";
    }
}, 1000);

//form Submission

/*
$(document).ready(function () {
    var fName, lName, email, phoneNo;

    $('#submit').click(function () {

        // get the form data
        fName = $('#InputFirstName').val();
        lName = $('#InputLastName').val();
        email = $('#InputEmail').val();
        phoneNo = $('#InputPhoneNo').val();

        $.post("http://localhost:3000/registry", {fName: fName, lName: lName, email: email, phoneNo: phoneNo}, function (data) {
            if(data==='done') {
                alert("Thank You for Attending Threshold's 10th Anniversary Celebrations.")
            }
        });

    });

});
*/

//redirect




