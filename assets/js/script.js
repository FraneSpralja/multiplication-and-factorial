//X! = X * (X - 1)!
//4! = 1 * 2 * 3 * 4 = 24

//Define x
let x = prompt("numero");
    
//Define math function
let multAndFact = (x) => {
    x = parseInt(x);
    //Check if factor is between the range
    if (x >= 1 && x <= 20){
            //Define multiplication factoring
        for(let i = 1; i <= x; i++){
            let mult = x * i;
            //show first results
            document.write(`${x} x ${i} = ${mult} <br>`);
        }
        //Define factorial of multi number
        for (let i = 1; i <= x; i++){
            let fact = 1;
            for (let f = 1; f <= i; f++){
                fact = fact * f;
            }
            //show second results
            document.write(`Factorial de ${i} es ${fact} <br>`)
        }
    }
    //Call for error
    else{
        document.write("Número fuera de rango")
    }
}

//Call the function
multAndFact(x);