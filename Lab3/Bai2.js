
//Bai2
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected= dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogKate);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log('Dog number ${i+1} is an adult and is ${dog} years old');
        } else {
            console.log('Dog number ${i+3} is still a puppy ');
        }
    });
};
checkDoggs([3, 2, 5, 13, 7], [6, 9, 8, 3, 4]);