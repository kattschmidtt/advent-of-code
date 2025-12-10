function day1() {
    var combination = [
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82",
    ];
    //the final password
    var password = 0;
    var startingPosition = 50;
    var currentPosition = startingPosition;
    var dialLength = 100; //set to 100 to include 0
    for (var i = 0; i < combination.length; i++) {
        if (/L(\d+)/.test(combination[i])) {
            var rotationAmount = /(\d+)/.exec(combination[i]);
            if (rotationAmount) {
                currentPosition = (currentPosition - parseInt(rotationAmount[1]) + dialLength) % dialLength;
                console.log(currentPosition);
            }
        }
        else {
            var rotationAmount = /(\d+)/.exec(combination[i]);
            if (rotationAmount) {
                currentPosition = (currentPosition + parseInt(rotationAmount[1]) + dialLength) % dialLength;
                console.log(currentPosition);
            }
        }
        //checking if current position value is 0, increment password counter
        if (currentPosition === 0)
            password++;
    }
    console.log('final password is: ', password);
    return password;
}
day1();
