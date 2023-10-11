let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0

// cau a
do {
    console.log('Phan tu thu %s = %s', i, arr[i])
    i = i + 1
} while(arr[i] !== undefined)


// cau i
 i = 0
 let doDaiMang = arr.length

 do {
    let j = i + 1

    do {
        if (arr[i] > arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }

        j  = j + 1
    } while(j < doDaiMang)

    i = i + 1
 } while(i < doDaiMang)

 console.log('Cau i: ', arr)


// cau d
// tong, so luong  phan tu:
let soLuongPhanTu = arr.length
tong = 0

i = 0
do {
    tong = tong + arr[i]
    i = i + 1
} while(i < soLuongPhanTu)

console.log('Cau d: ', tong / soLuongPhanTu)

// cau e
function caue(){
    let i = 0
    let j = arr.length - 1
    let temp = 0
    do {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i = i + 1
        j = j - 1
    } while(i < j)

    console.log("So dao nguoc ", arr)
}

//caue()

// cau f
const tanSuatXuatHien = {};
i = 0

do {
    const phanTuThuI = arr[i];
    tanSuatXuatHien[phanTuThuI] = (tanSuatXuatHien[phanTuThuI] || 0) + 1;
    i = i + 1
} while(arr[i] !== undefined)

console.log('Tan suat xuat hien: ', tanSuatXuatHien)

// cau g
i = doDaiMang
do {
    arr[i] = arr[i - 1]
    i = i - 1
} while (i >= 0)

i = doDaiMang - 1
do {
    arr[i + 1] = arr[i]
    i = i - 1
} while (i > 0)


arr[0] = 117

console.log('Cau g :',arr)