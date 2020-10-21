1. //Destructure person object and log
2. //add property 'married' to person object while destructuring and assign default value to false 

let person = {
    name: 'Rahul',
    address:{
        city: 'Pune',
        state: 'MH'
    },
    hobbies: ['Reading', 'Swimming'],
    hasVotingRights: true
}

let {name, address: {city, state}, hobbies: [hobby1, hobby2], hasVotingRights, married=false} = person

console.log(name, city, state, hobby1, hobby2, hasVotingRights, married)