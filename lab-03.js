// Bai 1
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

let doDaiMang = arr.length
let tongPhanTu = 0

for(let i = 0; i < doDaiMang; i = i+1) {
    console.log('Phan tu thu %s = %s', i, arr[i])
    tongPhanTu = tongPhanTu + arr[i]
}

console.log('Cau b: Tong gia tri cac phan tu trong mang la: %s', tongPhanTu)


// Cau c
let lonnhat = arr[0]
let nhonhat = arr[0]
for (i = 1;i < doDaiMang;i = i+1){
    if (lonnhat < arr[i]){
        lonnhat = arr[i]
    }
    if (nhonhat > arr[i]){
        nhonhat = arr[i]
    }
}
console.log('So lon nhat la:',lonnhat)
console.log('So nho nhat la:',nhonhat)


// Cau d
const trungBinhCong = tongPhanTu / doDaiMang
console.log('Cau d: ', trungBinhCong)

// cau e
let arr1 = []
let j = 0
for (let i = doDaiMang - 1; i >=0; i--) {
    arr1[j] = arr[i]
    j++
}

console.log(arr1)

// cau f
let exarr = []
let ex = 0
let check = true
let c = 0
for (i = 0;i < doDaiMang;i ++){
    c = 0
    check = true
    if (ex > 0){
        for (e = 0;e < exarr.length;e++){
            if (arr[i] == exarr[e]){
                check = false
            }
        }
    }
    if (check){
        for (j = 0;j < doDaiMang;j++){
            if (arr[i] == arr[j]){
                c = c+1
            }
        }
    }
    if (c > 0){
        exarr[ex]=arr[i]
        ex = ex + 1
        console.log('So %s gom %s so',arr[i],c)
    }
}