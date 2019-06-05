class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        document.getElementById("hello").innerHTML = "woof!";
    }
}

// let doggo = new Dog("Chester", 10, "Cavalier");

// doggo.bark();