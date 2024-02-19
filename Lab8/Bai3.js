const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) { 
        const img = document.createElement('img'); 
        img.src = imgPath;

        img.addEventListener('load', function () { 
            imgContainer.append(img);
            currentImg = img; 
            resolve(img);
        });
        img.addEventListener('error', function () { 
            reject(new Error('Image not found'));
        });
    });
};

// PART 1
const loadNPause = async function () {
    try {
        let img = await createImage('img/img1.png');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        img = await createImage('img/img2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch (err) {
        console.log(err);
    }
};
loadNPause();
// PART 2
const loadAll = async function(imgArr) {
    try{
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs)
        const imgsEl = await Promise.all(imgs)
        console.log(imgsEl)
        imgsEl.forEach(img => img.classList.add('parallel'));
    }catch(err) {
        console.log(err);
    }
}
loadAll(['img/img1.png', 'img/img2.jpg', 'img/img3.jpg']);