let monospace = document.querySelector('#monospace').textContent;

let regex = /[0-9]/g;
let result = monospace.match(regex);

for (let i = 0; i < result.length; i++) result[i] = + result[i];

function largestNumber(n) {
    const newArray = [];

    for (let i = 0; i <= result.length - n; i++) {
        const end = i + n;
        const numbers = result.slice(i, end).reduce((first, last) => {
            return first *= last;
        }, );

        newArray.push(numbers);
    }

    console.log(Math.max(...newArray));
}

largestNumber(13);


    // Fibonacci

    let x = 1; 
    let y = 2; 

    // while(x + y < 4000000 ){
    //     console.log(x);

    //     x +=y;

    //     console.log(y);

    //     y+=x;
    // }

    function fibonacci () {
        if(x + y < 4000000) {
            console.log(x);

            x +=y;
    
            console.log(y);
    
            y+=x;

            fibonacci();
        }
    }

    fibonacci();









