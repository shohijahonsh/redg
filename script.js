const productList = {
    burger:{
        info:"big",
        price:10000,
    },
    lavash:{
        info:"big",
        price:15000,
    },

}

let dastavka = 1000
let totalPrice = 0
for (const key in productList) {
    totalprice += productList[key].price;
    console.log("sizning buyurtmangiz " + productList[key].info  + " dastavkez " + dastavka + "som" );
   
}



let a = +prompt(" kvadratla soni")
while (isNaN(a) || a == 0 ) {
    a = +prompt("kvadratla soni")
}
if (a % 2 == 0) {
  a = a + 1
}
box = ""
for (let i = 0; i < a; i++) {
    for (let q = 0; q < a; q++) {
        if (q == i || i == 0 || q == 0 || i == (a - 1) || q == (a - 1) || (i + q) == (a - 1)) {
            box += "⬜️"
        } else {
            box += "⬛️"
        }
    }
    console.log(box);
    box = ""
}  


for (let i = 1; i <= 10 ; i++) {     
     let name = prompt("name ")
    while (!isNaN(name)) {
        name = prompt("ismingizni yozing")
    }
    age = +prompt(" yoshiz "," 20 ")
    console.log(` odam ${i}`);
    console.log(" ismingiz " + `${ name }`);
    console.log(" siz " +`${ age }` +" dasiz " );
}
