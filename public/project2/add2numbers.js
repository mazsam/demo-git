function kalkulator() {
    let angka = document.querySelectorAll('input');
    let i1= angka[0].value ; //angka pertama
    let i2= angka[1].value ; //angka kedua
    let hasil = parseInt(i1) + parseInt(i2);
    document.getElementById("hasil").value = hasil;
    // console.log(angka[3].value)
}