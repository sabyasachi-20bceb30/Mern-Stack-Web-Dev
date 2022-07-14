const prompt = require('prompt-sync')();
const fs = require('fs');

function items(id,name,quantity,price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.additem = ()=>{
    const no_of_items = prompt(`Enter no.of items you want ? `);
    let itemarr = JSON.parse(fs.readFileSync("item.json"));
    for(let i=0;i<no_of_items;i++)
    {
        console.log('\n');
        const id = prompt(`Enter item ID: `);
        const name = prompt(`Enter item name: `);
        const quantity = prompt(`Enter quantity: `);
        const price = prompt(`Enter item price: `);
        let item = new items(id,name,quantity,price);
        itemarr.push(item);
    }
    fs.writeFile("item.json",JSON.stringify(itemarr),(err)=>{
        if(err)
            console.log(`SOMETHING WENT WRONG!!!`);
        else
            console.log(`ITEM(S) ADDED SUCCESSFULLY\n`);
    })
}