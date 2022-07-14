const prompt = require('prompt-sync')();
const fs = require('fs');

function items(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}
exports.total = ()=>{
    let itemarr = JSON.parse(fs.readFileSync("item.json"));
    let total = 0;
    for(let i=0;i<itemarr.length;i++)
    {
        total = total + itemarr[i].price*itemarr[i].quantity;
    }
    return total;
}