// Mkulima Platform
// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. 
// This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors.
//  To begin with, farmers have to register on the platform and login. Thereafter, they can upload their products with respective prices.
//  On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests. 

// Create a class Mkulima that will keep a list of farms, grocery vendors and products.
//  A single farm record should contain id, farm name, farmer, phone number and address.
//  A single grocery vendor record should contain id, store name and phone number. A product should have id, name and price fields. 

// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity

class Mkulima {
  
  constructor() {
    this.farms = [];
    this.products = [];
    this.orders = [];
    this.addFarm= function(farmId,name,farmer,phone,address){
          this.farms.push({farmId,name,farmer,phone,address})
    }
    this.removeFarm=function(id){
       let targetFarm= this.farms.find(item=>item.farmId===id)
       let farmIndex=this.farms.indexOf(targetFarm)
       this.farms.splice(farmIndex,1)
    }
    this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
            let targetFarm= this.farms.find(item=>item.farmId===oldId)
            targetFarm.farmId = newFarmId
            targetFarm.name=newName
            targetFarm.farmer=newFarmer
            targetFarm.phone=newPhone
            targetFarm.address=newAddress
    }
    this.getFarm=function(id){
        console.log(this.farms.find(object=>object.farmId===id))
    }
    this.addProduct= function(productId,name,price){
        this.farms.push({productId,name,price})
  }
  this.removeProduct=function(id){
     let productIndex= this.products.findIndex(item=>item.productId===id)
     this.farms.splice(productIndex,1)
  }
  this.updateProduct=function(oldId,newId, newName, newPrice){
          let product= this.products.find(item=>item.productId===oldId)
          product.farmId=newId
          product.name=newName
          product.farmer=newPrice
  }
  this.getProducta=function(id){
    console.log(this.products.find(product=>product.farmId===id))
   }


  this.printProducts=function(){
    console.log(this.products)
   }
   this.calculateOrderCost=function(id,quantity){
    let product= this.products.find(item=>item.productId===id)
    console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
    this.orders.push(product)
    this.order

   }
}
}

let MkulimaPlatform= new Mkulima()
MkulimaPlatform.addFarm("242","Maize farm","Pascaline","0716956732","Karen,Nairobi")
MkulimaPlatform.addFarm("768","Sorghum farm","Super","0785436272","Gikondo,Kigali")

// MkulimaPlatform.removeFarm(242)
// MkulimaPlatform.removeFarm(768)

MkulimaPlatform.updateFarm("242","123","Beans farm","Kayitete","0734567832","Kisumu")

console.log(MkulimaPlatform.farms)

MkulimaPlatform.getFarm("123")
