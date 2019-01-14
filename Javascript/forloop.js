// Count from -10 to 40
for(var i = -10; i < 20; i++) {
    console.log(i);
}
// Count even numbers ffrom 10 to 40
for(var n = 10; n < 41; n+=2) {
    console.log(n);
}
// Count odd numbers from 300 to 333
for(var c = 300; c <= 333; c++ ) {
    if (c % 2 !== 0) {
        console.log(c);
    }
}
// Print all number between 5 and 50 divisible by 5 AND 3
for(var d = 5; d <= 50; d++ ) {
    if (d % 3 === 0 && d % 5 === 0) {
        console.log(d);
    }
}

