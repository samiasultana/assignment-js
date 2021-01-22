// https://github.com/samiasultana/assignment-js


// Problem 1: kilometerToMeter

function kilometerToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var meter = kilometerToMeter(197);
var result = meter;
console.log(result);



// Problem 2: budgetCalculator

function budgetCalculator(price, item) {
    var result = (price * item);
    return result;
}
var watch = budgetCalculator(50, 5);
var phone = budgetCalculator(100, 4);
var laptop = budgetCalculator(500, 2);

var total = watch + phone + laptop;
console.log(total);



// Problem 3: hotelCost

function hotelCost(nights) {
    var budget = 0;

    if (nights <= 10) {
        firstTen = 10 * 100;
    }
    else if (nights <= 20) {
        var firstTen = 10 * 100;
        remaining = nights - 10;
        var secondPart = remaining * 80;
        budget = firstTen + secondPart;
    }
    else {
        var firstTen = 10 * 100;
        var secondPart = 10 * 80;
        remaining = nights - 20;
        var thirdPart = remaining * 50;
        budget = firstTen + secondPart + thirdPart;
    }
    return budget;
}
result = hotelCost(40);
console.log(result);



// Problem 4: megaFriend

function megaFriend(names) {
    var largeFriend = [0];
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > largeFriend.length) {
            largeFriend = names[i];
        }
    }
    return largeFriend;
}

var names = ["Dumpa", "Mohammad", "Sabbir", "Bhuiyan", "Pecha", "Mimi", "Samia"];
var result = megaFriend(names);
console.log(result);