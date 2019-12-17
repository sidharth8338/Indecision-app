class Person {
    constructor(name = 'Mystirio', age = 0) {
        this.name = name
        this.age = age
    }
    getGretting() {
        return `Hi, ${this.name}, Welcome To the Universe.`
    }
    getBio() {
        return `I am ${this.name} and ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGretting() {
        let gretting = super.getGretting()
        return gretting + ` You are From ${this.homeLocation}`
    }
}



const me = new Traveler('Sidharth', 21, 'Bhubaneswar')
console.log(me.getBio())
console.log(me.getGretting())