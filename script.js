$("button").click(function() {
    var username  = $(".name").val();
    console.log(username);
    var position = $(".position"). val();
    console.log(position);

    var timespermonth= $(".number"). val();
        console.log(timespermonth);

    
    var times = timespermonth *12*10;
            console.log(times);

    var result = "Hello " + username + " by 2050 you will have scored "
    + times + " goals.";
                console.log(result);

    $(".answer").text(result);
});