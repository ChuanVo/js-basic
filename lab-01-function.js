
function chuvihcn (chieudai,chieurong){
    let chu_vi = (chieudai + chieurong) *2
    
    return chu_vi

}
const chuvi1 = chuvihcn(2,3)
const chuvi2 = chuvihcn(10,5)
console.log("Chu vi = ",chuvi1)

function dientichhcn(chieudai,chieurong){
    let dien_tich = chieudai * chieurong
    return dien_tich
}
const dientich1 = dientichhcn(2,3)
console.log("dien tich = ",dientich1)

module.exports = {
    dientichhcn
}