import React,{useState} from "react";
import './productForm.css'
export const ProductForm = (props)=>{
    let [product,setProduct] = useState({
        name:'',
        price:'',
        img:''
    })

    const nameHandler =(event)=>{
        setProduct((prevState)=>{
            return{//best way
                ...prevState,
                name:event.target.value
            }
        })
    }

    const priceHandler =(event)=>{
        setProduct((prevState)=>{
            return{//best way
                ...prevState,
                price:event.target.value
            }
        })
    }

    const imageHandler =(event)=>{
        setProduct((prevState)=>{
            return{//best way
                ...prevState,
                img:event.target.value
            }
        })
    }
    const isalpha = (n)=>{
        let invalid = 0;
        for(let i=0;i<n.length;i++){
            if(((n[i]>='A' && n[i]<='Z') || (n[i]>='a' && n[i]<='z')))
            {
                invalid = 0;
            }
            else if(n[i]==='!' || n[i]==='@' || n[i]==='#' || n[i]==='$' || n[i]==='%' || n[i]==='^' || n[i]==='&' || n[i]==='*'){
                return 1;
            }
            else{
                return 1;
            }
        }
        return invalid
    }

    const check = (n)=>{
        for(let i=0;i<n.length;i++){
            
            if(n[i]==='!' || n[i]==='@' || n[i]==='#' || n[i]==='%' || n[i]==='^' || n[i]==='&' || n[i]==='*'){
                return 1;
            }
            else{
                return 0;
            }
        }
    }

    const formSubmitHandler = (event)=>{
        let error = '';
        if(isalpha(product.name) && error === ''){
            error='Please enter Proper Product Name';
            console.log(error);
        }
        else if(check(product.price) && error === ''){
            error='Please enter Proper Price';
            console.log(error);
        }
        else{
            props.onAddProduct(product);
        }
        event.preventDefault();
    }

    return(
        <div className="addBox">
            <h2>ADD NEW PRODUCT</h2>
            <form onSubmit={formSubmitHandler}>
                *All fields are required
                <div className="entry">
                    Name: <input type="text" placeholder="Enter Product Name" onChange={nameHandler} required></input>
                </div>
                <div className="entry">
                    Price: <input type="text" placeholder="Enter Product Price" onChange={priceHandler} required></input>
                </div>
                <div className="entry">
                    Image: <input type="text" placeholder="Enter Product Image" onChange={imageHandler} required></input>
                </div>
                <div>
                    <button className="add">ADD PRODUCT</button>
                </div>
            </form>
        </div>
    )
}
