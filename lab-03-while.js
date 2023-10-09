let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let do_dai_mang = arr.length

// cau a
// let i = 0
// while(arr[i] !== undefined) {
//     // console.log('Phan tu thu %s = %s', i, arr[i])
//     i = i +1
// }

// cau b

let i = 0
let tong = 0
while(arr[i] !== undefined) {
    tong = tong + arr[i]
    i = i + 1
}

console.log('Cau b: Tong cac phan tu trong mang la: ', tong)

// cau c
let phanTuLonNhat = arr[0]
let phanTuNhoNhat = arr[0]

i = 0
while(arr[i] !== undefined) {
    if (arr[i] > phanTuLonNhat) {
        phanTuLonNhat = arr[i]
    }

    if (arr[i] < phanTuNhoNhat) {
        phanTuNhoNhat = arr[i]
    }
    i = i + 1
}

console.log('Cau c: Phan tu lon nhat la: ', phanTuLonNhat)
console.log('Cau c: Phan tu nho nhat la: ', phanTuNhoNhat)

// cau d
i = 0
while(arr[i] !== undefined) {
    i = i + 1
}

console.log('Cau d: Trung binh cong cua mang la: %s', tong / i)

// cau e
function caue(){
    let i = 0
    let j = do_dai_mang - 1
    let temp = 0
    while(i < j){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i = i + 1
        j = j - 1
    }
    console.log("So dao nguoc ", arr)
}
// caue()

// cau f

const tanSuatXuatHien = {};
i = 0
while(arr[i] !== undefined) {
    const phanTuThuI = arr[i];
    tanSuatXuatHien[phanTuThuI] = (tanSuatXuatHien[phanTuThuI] || 0) + 1;
    i = i + 1
}

console.log('Tan suat xuat hien: ', tanSuatXuatHien)


// cau g
i = do_dai_mang - 1
while(arr[i] !== undefined) {
    arr[i + 1] = arr[i]
    i = i - 1
}

arr[0] = 117

console.log(arr)

// cau h
function check_tang_dan(arr){
    let check_td=true
    let i=0
    
    while(i<do_dai_mang){
        if(arr[i] > arr[i+1]){
            check_td = false
    
        }
        i++
    }
    if(check_td===true)
        return console.log("la mang tang dan")
    else{
        return console.log("Mang khong tang")
    }
}
check_tang_dan(arr)

// cau i
i = 0
while(arr[i] !== undefined) {
    let j = i + 1

    while(arr[j] !== undefined) {
        if (arr[i] < arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }

        j = j + 1
    }

    i = i + 1
}

console.log('Cau i: ', arr)

// cau k
i = 0 
while(arr[i] !== undefined) {
    if (arr[i] % 2 === 0) {
        console.log('Phan tu so chan trong mang: ', arr[i])
    }

    i = i + 1
}

