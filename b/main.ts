let printBar = (number: Number) => {
    return ( 
        +number >= 0 && 
        +number % 11 === 0 && 
        console.log("bar")
    )
}

printBar(13)