const {newlist} = require('./new');
const {updateitem} = require('./update');
const {removeitem} = require('./remove');
const {additem} = require('./add');
const {total} = require('./total')
const prompt = require('prompt-sync')();

let operation = prompt(`Enter the operation: `);
let id;
switch(operation){
    case 'new':
        newlist();
        break;
    case 'update':
        id = prompt(`Enter the ID: `);
        updateitem(id);
        break;
    case 'remove':
        id = prompt(`Enter the ID: `);
        removeitem(id);
        break;
    case 'add':
        additem();
        break;
    case 'total':
        console.log(`TOTAL PRICE = Rs.${total()}\n`);
        break;
    default:
        console.log('Pls give proper operation\n');
        break;
}
