class vehicle{
    constructor(type,band,price){
        this.type = type
        this.band = band
        this.price=price

}
getThis(){
    console.log(this)
}
getPrice(){
    return this.price
}
}
const car1 = new vehicle('car','honda',5000000)
const car2 = new vehicle('car','toyota',400000)
car1.getThis();

car2.getPrice();