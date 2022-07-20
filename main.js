var Kiosk={
    orange:30,
    mango:15,
    avocado:40

}
function calculateFruitCost(fruit,quantity){
    console.log( `${quantity} ${fruit} for ${Kiosk[fruit]*quantity}`)
}
calculateFruitCost("orange",2)



class KioskCalc{
    constructor(name,quantity){
        this.name=name
        this.quantity=quantity
        this.fruitsPriceList={"orange": 30, "mango": 15, "avocado": 40 }
        this.getTotalCost=function(){
            // let fruit=this.fruitsPriceList.keys.find(item=>item===this.name)
            console.log( `${this.quantity} ${this.name} for ${this.fruitsPriceList[name]*this.quantity} KES`)
        }
    }}
    var kioskcalc=new KioskCalc("avocado",2)
    kioskcalc.getTotalCost()
