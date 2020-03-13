const ages = [12,14,16,13]; 
const ages2 = [15,16,12]; 

//const allAges = ages.concat(ages).concat([5]).concat(ages2);

const allAges2 = [...ages, ...ages2, 5];
console.log(allAges2);

const business= 650; 
const minister = 450; 
const sochib = 250; 

const takaPoisa = [650,450,250,850]; 
const maximum = Math.max(...takaPoisa);
console.log(maximum); 

