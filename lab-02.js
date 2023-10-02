// // bai 1:
// // cau a:

// function kiemTraAmDuong(n) {
//     if (n < 0) {
//         console.log('So n la so am')
//     }
//     else if (n > 0) {
//         console.log('So n la so duong')
//     }
//     else {
//         console.log('So n khong am khong duong')
//     }
// }

// kiemTraAmDuong(0)

// // cau b
// function kiemTraChanLe(n) {
//     if (n % 2 === 0) {
//         console.log('%s la so chan', n)
//     }
//     else {
//         console.log('%s la so le', n)
//     }
// }

// kiemTraChanLe(1)


// // cau c
// function kiemSoLonNhat(a,b,c){
//     if (a>b && a>c){
//         console.log(a,'la so lon nhat')
//     }
//     else if (b>a && b>c){
//         console.log(b,'la so lon nhat')
//     }
//     else if (c>a &&c>b){
//         console.log(c,'la so lon nhat')
//     }
// }

// function kiemTraSoLonNhat(a,b,c) {
//     let max = a

//     if (max < b) {
//         max = b
//     }

//     if (max < c) {
//         max = c
//     }

//     console.log('So lon nhat la: %s', max)
// }

// kiemSoLonNhat(4,67,11)
// kiemTraSoLonNhat(4,67,11)


// function KiemtraNamnhuan(a){
//     if (a % 4 == 0 && a % 100 != 0){
//         console.log('Nam nay la nam nhuan')
//     }
//     else {
//         console.log('Nam nay khong phai la nam nhuan')
//     }
// }
// KiemtraNamnhuan(2000)
// KiemtraNamnhuan(2012)
// KiemtraNamnhuan(2395)

// Bai 2 cau d



function gia_cuoc(sophut){
    const phi_co_dinh=25000
    let tong=0
    if (sophut>200)
        phi=(sophut-200)*200+150*400+50*600
    else if(sophut>50)
    {
        phi=(sophut-50)*400+50*600
    }
    else {
        phi=600*sophut
    }
    tong=phi_co_dinh+phi
    console.log("So",sophut,"phut da goi")
    console.log('Thue bao',tong)
}

function tinhGiaCuoc(soPhut) {
    const phiCoDinh = 25000
    let tongChiPhi = 0
    let chiPhi = 0

    if (soPhut >= 0 && soPhut <= 50) {
        chiPhi = soPhut * 600
    }
    else if (soPhut > 50 && soPhut<= 200) {
        chiPhi = 50 * 600 + (soPhut - 50) * 400
    }
    else if (soPhut > 200) {
        chiPhi = 50 * 600 + 150 * 400 + (soPhut - 200) * 200
    }

    tongChiPhi = phiCoDinh + chiPhi

    return tongChiPhi
}


gia_cuoc(270)
