let a = document.getElementById('A').value;
let b = document.getElementById('B').value;
let c = document.getElementById('C').value;
let h = document.getElementById('H').value;
let z = 2;
console.log(a)
function calculate() {
    if (a!=0 && b!=0 && c!=0 && h!=0) {
        let Len =parseInt(a,10)+parseInt(b,10)+parseInt(c,10);
        document.getElementById("lengths").innerHTML = Len;
        let Area = a*h/z;
        document.getElementById("area").innerHTML = Area;
    }
    else {
        document.getElementById("lengths").innerHTML = "brak danych wypełnij wszystkie pola";   
    }
}
