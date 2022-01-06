let display = (number: Number) => {
    if(+number < 0) return;

    if(+number % 2 === 0) return console.log('candy')

    if(+number % 11 === 0) return console.log('bar')

    if(+number % 22 === 0) return console.log('candybar')

    return console.log(number)
}

display(11);