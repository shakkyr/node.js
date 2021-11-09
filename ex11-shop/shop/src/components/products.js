import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        ( async() =>{
            await axios.get('http://localhost:5000/').then(res =>{
                setAllProducts(res.data)
            })
        } )()
 
    }, [])


 
    return (
        <div>
            {allProducts.map((element)=>{
              return <div key={element.id}>
                   {element.name} ***  {element.price}
                   </div>
            })}
           
        </div>
    )
}

export default Products ;