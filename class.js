/**
 * class --> template
 * properties
 * method(a special type of function)
 * object
 */




class player {
     constructor(name,age){
        this.name = 'mim';
        this.age = 26;
        this.location = 'Bangladesh'
        // console.log('calling the constructor method',name)
     }

    goal(){
        console.log('score a goal')
    }
    grtTeamName(){

        return 'Borsa'
    }
}


const player1 = new player()
console.log(player1 instanceof player)
console.log(player1)
// player1.goal()
// console.log(player1)