const students =[
    {id: 1, name:'abul', marks: 50},
    {id: 1, name:'nabul', marks: 55},
    {id: 1, name:'kabul', marks: 95},
    {id: 1, name:'dabul', marks: 15}
]

const names = students.map(student => student.marks * 0.75)
const goodStudent = students.filter(student => student.marks > 80)


console.log(goodStudent)
console.log(names)