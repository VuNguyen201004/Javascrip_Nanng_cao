
// const whereAmI = function (lat, lng) {
//     fetch('https://geocode.xyz/${lat},${lng}?geoit=json')
//         .then(res => {
//             if (!res.ok) throw new Error('Van de xay ra ${res.status}');
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log('You are in ${data.city} , ${data.country}');

//             return fetch('https://restcountries.eu/rest/v2/name/${data.country}');

//         })

//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error('${err.message}'));

// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(33.933, 18.474);


console.log('Test start');
setTimeout(() => console.log(') sec timer'), 0);
Promise.resolve('Resoled promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2 ').then(res => {
    for (let i = 0; i < 1000000000; i++) {
        console.log(res);
    }
});
console.log('Test end');


const lotteryPromise = new Promise(function (resolve,
    reject) {
    console.log('Lotter draw is happening');
    setTimeout(function () {
        if (Math.redom() >= 0.5) {
            resolve('You win');
        } else {
            reject(new Error('You lost your money'));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
        console.log('1 secounds passsed');
        return wait(1);
    })
    .then(() => {
        console.log('2 secounds passsed');
        return wait(1);
    })
    .then(() => {
        console.log('3 secounds passsed');
        return wait(1);
    })
    .then(()=> console.log('4 secounds passed'));


Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x=>console.error(x));

const getPosition = function(){
    return new Promise(function (resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);

    });
};

getPosition().then(pos => console.log(pos));

const whereAmI = fucntion(){
    getPosition().then ( pos=>{
    console.log(pos.coords);
});
fetch('https://geocode.xyz/${lat},${lng}?geoit=json')
        .then(res => {
            if (!res.ok) throw new Error('Van de xay ra ${res.status}');
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log('You are in ${data.city} , ${data.country}');

            return fetch('https://restcountries.eu/rest/v2/name/${data.country}');

        })

        .then(data => renderCountry(data[0]))
        .catch(err => console.error('${err.message}'));
        
