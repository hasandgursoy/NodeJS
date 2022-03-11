let deger = process.argv.slice(2);

let pi = Math.PI;

function findCircle(s){

    let circle = pi*(s*2);
    console.log(circle);
}

findCircle(deger[0]);

