let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
    const isString = typeof calculated === 'string' && !isNaN(calculated);
    const calculatedAsNumber = parseFloat(calculated);
    return calculatedAsNumber + 1;
}

const calcUser = () => {
    const originalCalculated = calculated;
    calculated = logCalc();
    
    if (calculated > 2 && originalCalculated <= 2) {
        user = 'John';
        state = 'requesting';
    }
    
    if (calculated > 3 && originalCalculated <= 3) {
        state = 'idle';
    }
}

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

checkUser();
calcUser();