// global
let a = 10;

function coba () {
    // local
    let b = 5;

    while (b < 10) {
        b += 1;
        console.log("Hasil :" + b);
            }
};

while (a > 1) {
    console.log("Hasil :" + a);
    a--;
}

coba();
