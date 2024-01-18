const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => (age <=2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >=18);
    console.log(humanAges);
    console.log(adults);
    
    const average = adults.reduce((acc , age ,i , arr) => acc + age / arr.length ,0);

    return average;
};
const avg1 = calcAverageHumanAge([5,3,6,9,223,7,2,1]);
const avg2 = calcAverageHumanAge([1,3,54,64,24,6,3,2]);
console.log(avg1,avg2);
