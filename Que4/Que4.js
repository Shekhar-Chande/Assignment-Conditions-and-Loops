// Q4. Generate numbers between any 2 given numbers

function getNumber(min, max)
{
    min = Math.ceil(min);
    max=Math.ceil(max);

    return Math.floor(Math.random()*(max-min+1)+min)
}

let randomInt = getNumber(10,25)
console.log(randomInt);