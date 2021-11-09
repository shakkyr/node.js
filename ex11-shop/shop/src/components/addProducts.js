import React,{useState} from 'react'



import axios from 'axios'

const AddProducts=()=> {



 const [product, setProduct] = useState({
     name : '',
     price : ''
 })

const inputHandler = (e)=>{
    setProduct({
        ...product,
        [e.target.name]: e.target.value
    })
    console.log(product);
}

const addNewProduct = async ()=>{
 await axios.put(`http://localhost:5000/${product.name}`,product).then()
}

    return (
        <div>
            name : 
            <input type="text" onChange={inputHandler}  name="name"  value={product.name}/> <br/><br/>
            price:
            <input type="number" onChange={inputHandler} name="price" value={product.price}/><br/><br/>
            <input type="button" onClick={addNewProduct} value='ADD' />
        </div>
    )
}

export default AddProducts;