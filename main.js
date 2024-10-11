const arr =["jeruk","apel","mangga","alpukat","durian"]

//urutkan a-z berdasarkan alfabet
const sorted =arr.sort();
console.log(`urutan berdasarkan alfabet yaitu:`,arr); 

//looping arraynya
for (const buah of arr) {
    if (buah === "apel") {
        console.log("buah enak " );
    } else if (buah === "durian") {
        console.log("Manis sekali ");
    } else {
        console.log("Biasa saja ");
    }
}

// apabila buahnya = apel maka print(buah enak)
// apabila buahnya = durian maka print (manis sekali)
// selain apel dan durian print (biasa saja)

