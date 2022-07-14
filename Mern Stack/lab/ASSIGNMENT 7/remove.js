const prompt = require('prompt-sync')();
const fs = require('fs');

function items(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.removeitem = (id)=>{
    let itemarr = JSON.parse(fs.readFileSync("item.json"));
    
    itemarr = itemarr.filter(items=>items.id != id);
  
    fs.writeFile("item.json",JSON.stringify(itemarr),(err)=>{
        if(err)
            console.log(`SOMETHING WENT WRONG!!!`);
        else
            console.log(`ITEM REMOVED SUCCESSFULLY\n`);
    })
}