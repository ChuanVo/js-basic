let phepToan = require('./tinh-toan.js');

const ketQuaTinhTong = phepToan.hamTinhTong(3,5)
console.log('Ket qua: ', ketQuaTinhTong)


// tim so nho nhat trong 3 so

let a = 1
let b = 3
let c = 10

let d = 5
let e = 10
let f = 11

function timSoNhoNhat(so1,so2,so3) {
    let min = so1

    if (so2 < min) {
        min = so2
    }

    if (so3 < min) {
        min = so3
    }

    return min
}

let ketQua = timSoNhoNhat(a,b,c)
let ketQua2 = timSoNhoNhat(b,d,e)


console.log('So nho nhat la: ', ketQua)
console.log('So nho nhat la: ', ketQua2)