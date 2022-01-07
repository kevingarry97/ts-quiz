let printCandy = (number: Number) => {
    return ( 
        +number >= 0 && 
        +number % 2 === 0 && 
        console.log("candy")
    )
}

printCandy(2)