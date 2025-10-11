class vehicle{
    #tin
    constructor(type,band,price){
        this.type = type
        this.band = band
        this.price=price
        this.#tin = '12412'

}
getThis(){
    console.log(this)
}
getPrice(){
    return this.price
}
 getTin(){
    return this.#tin;
 }
}
const car1 = new vehicle('car','honda',5000000)
const car2 = new vehicle('car','toyota',400000)
car1.getThis();

car2.getPrice();