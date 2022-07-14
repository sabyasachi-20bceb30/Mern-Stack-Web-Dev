const prompt = require('prompt-sync')();
const fs = require('fs');

function items(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.updateitem = (id)=>{
    let itemarr = JSON.parse(fs.readFileSync("item.json"));
    let name,price;
    for(let i=0;i<itemarr.length;i++){
        if(itemarr[i].id == id)
        {
            name = itemarr[i].name;
            price = itemarr[i].price;
        }
    }
    const quantity = prompt(`Enter Quantity: `);

    itemarr = itemarr.filter(items=>items.id != id);
    
    const itemobj = new items(id,name,quantity,price);
    
    itemarr = [...itemarr,itemobj];
    fs.writeFile("item.json",JSON.stringify(itemarr),(err)=>{
        if(err)
            console.log(`SOMETHING WENT WRONG!!!`);
        else
            console.log(`ITEM QUANTITY UPDATED SUCCESSFULLY\n`);
    })
}