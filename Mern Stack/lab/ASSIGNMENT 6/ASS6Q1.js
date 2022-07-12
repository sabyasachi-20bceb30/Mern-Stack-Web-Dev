let cust= [
    {
        name:'Sabyasachi',
        email: 'sabyasachibiswal141@gmail.com',
        phone: '8456091733',
        no_of_times_shopped: 1,
        purchase_history : [
            {
                date_of_purchase:'04/07/2022',
                item_purchase:[
                    {
                        product_name:'apple',
                        product_price:100
                    },
                    {
                        product_name:'Mango',
                        product_price:70
                    },
                    {
                        product_name:'Grapes',
                        product_price:67
                    },
                ]
            } 
        ]
    },
    {
        name:'Arjyaman',
        email: 'arjyman2002@gmail.com',
        phone: '9937194892',
        no_of_times_shopped: 1,
        purchase_history : [
            {
                date_of_purchase:'05/07/2022',
                item_purchase:[
                    {
                        product_name:'Guava',
                        product_price:34
                    },
                    
                ]
            }
        ]
    },
    {
        name:'Bidur',
        email: 'sahoobidur32@gmail.com',
        phone: '9437227792',
        no_of_times_shopped: 2,
        purchase_history : [
            {
                date_of_purchase:'06/07/2022',
                item_purchase:[
                    {
                        product_name:'milk',
                        product_price:30
                    },
                ]
            },
            {
                date_of_purchase:'07/06/2022',
                item_purchase:[
                    {
                        product_name:'curd',
                        product_price:40
                    }
                ]
            },
            {
                date_of_purchase:'08/09/2022',
                item_purchase:[
                    {
                        product_name:'Butter',
                        product_price:25
                    }
                ]
            } 
        ]  
    },
    {
        name:'Srinibas',
        email: 'srinu8735@gmail.com',
        phone: '8337959181',
        no_of_times_shopped: 7,
        purchase_history : [
            {
                date_of_purchase:'09/11/2022',
                item_purchase:[
                    {
                        product_name:'juice',
                        product_price:119
                    },
                    {
                        product_name:'Mixture',
                        product_price:79
                    },
                ]
            },
            {
                date_of_purchase:'10/06/2022',
                item_purchase:[
                    {
                        product_name:'notebook',
                        product_price:389
                    }
                ]
            },
            {
                date_of_purchase:'11/07/2022',
                item_purchase:[
                    {
                        product_name:'salt',
                        product_price:100
                    }
                ]
            },
            {
                date_of_purchase:'12/07/2022',
                item_purchase:[
                    {
                        product_name:'Chicken',
                        product_price:170
                    }
                ]
            },
            {
                date_of_purchase:'17/06/2022',
                item_purchase:[
                    {
                        product_name:'pencil',
                        product_price:23
                    }
                ]
            },
            {
                date_of_purchase:'18/06/2022',
                item_purchase:[
                    {
                        product_name:'shirt',
                        product_price:799
                    }
                ]
            },
            {
                date_of_purchase:'19/06/2022',
                item_purchase:[
                    {
                        product_name:'toy',
                        product_price:3678
                    }
                ]
            },
        ]    
    },

    {

        name:'Satya',
        email: 'satya23@gmail.com',
        phone: '9437604379',
        no_of_times_shopped: 5,
        purchase_history : [
            {
                date_of_purchase:'15/10/2022',
                item_purchase:[
                    {
                        product_name:'pen',
                        product_price:50
                    }
                ]
            },
            {
                    date_of_purchase:'16/02/2022',
                    item_purchase:[
                        {
                            product_name:'flower',
                            product_price:1000
                        }
                    ]
                },
                {
                    date_of_purchase:'17/07/2022',
                    item_purchase:[
                        {
                            product_name:'ice-cream',
                            product_price:463
                        }
                    ]
                },
                {
                    date_of_purchase:'07/09/2022',
                    item_purchase:[
                        {
                            product_name:'vegetables',
                            product_price:786
                        }
                    ]
                },
                {
                    date_of_purchase:'19/10/2022',
                    item_purchase:[
                        {
                            product_name:'bulb',
                            product_price:100
                        }
                    ]
                },
                {
                    date_of_purchase:'01/12/2022',
                    item_purchase:[
                        {
                            product_name:'medicine',
                            product_price:652
                        }
                    ]
                } 
            ]                 
            

    }
];
console.log(cust.length);

for(let i=0;i<5;i++)
{
    if(cust[i].no_of_times_shopped>5)
    {
        console.log(`${cust[i].name} has shopped more than 5 times`);
    }
}

for(let i=0;i<5;i++)
{
    let  total_purchase = 0;
    for(let j=0;j<cust[i].no_of_times_shopped;j++)
        {
        let sum=0
        for(let k=0;k<cust[i].purchase_history[j].item_purchase.length;k++)
        {
            
            sum += cust[i].purchase_history[j].item_purchase[k].product_price;
        }
        total_purchase += sum;
    }
    console.log(`\nTotal purchase by ${cust[i].name} is ${total_purchase}`);
}