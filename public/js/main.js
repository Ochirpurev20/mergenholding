const imgDir = './img/'
let currentImgIndex = 2;
const slide = (n) => {
    currentImgIndex = currentImgIndex + n
    console.log('curr ==', currentImgIndex)
    if(currentImgIndex >0  && currentImgIndex <5) {
        document.getElementById('current-image').src = imgDir+'img'+currentImgIndex+'.jpg'
    } else {
        alert('press next button and cur ==='+currentImgIndex)      
        
    }
}