const myArray = ['Danny', 'Adrian', 'Hugo'];

mySecondArray = myArray.map((x, index) => {
    if(index === 2) {
        return x + ' is not cool!';
    }
    else {
        return x + ' is the coolest!'
    }
});

x = myArray.reduce((acc, item)=>{
    return acc += (", " + item);
},);

console.log(myArray);


console.log(mySecondArray);

console.log(x);