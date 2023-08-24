let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => { 
    const isString = typeof calculated === 'string' && !isNaN(calculated); /*checking if calculated is a numerical string*/
    const calculatedAsNumber = parseFloat(calculated); /*converting calculated into a number*/
    calculated = calculatedAsNumber + 1; /*return the next calculated value by adding 1 to the number*/
}

const calcUser = () => {
    logCalc();
    
    if (calculated > 2) {
        user = 'John';
        state = 'requesting';
    }
    
    if (calculated > 3) {
        state = 'idle';
    }
};

const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
    }
}

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();



