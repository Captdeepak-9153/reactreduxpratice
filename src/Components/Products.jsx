import React, { useEffect} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';

function Products() {
    const dispatch = useDispatch();
    const {data:products,status} = useSelector((state)=> state.product)


    useEffect(() =>{

      dispatch(fetchProducts());
      
      // old way to fetch
        // const fetchProducts = async () =>{

        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json();
        //     // console.log(data);
        //     setProducts(data);
        // }

        // fetchProducts();

    },[]);

    const handleAdd = (product)=>{
      //product to store in the reduxstore we have to dispatch the action to the store then it can call that specific reducers to grab the data or simply we can say that it can mutate the state for that also we have to use useDispatch hook to dispatch the action into the store
      dispatch(add(product));
      console.log(handleAdd);
    }

    if(status === STATUSES.LOADING ){
      return <h1>LOADING.....</h1>
    }
    if (status === STATUSES.ERROR){
      return <h1>Something went Wrong!....</h1>
    }
  return (
    <div className='productsWrapper'>
        {
          products.map(product =>(
            <div className='card' key={product.id}>
                <img src={product.image} alt='image'/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <h6>{product.description}</h6>
                <button onClick={()=> handleAdd(product)}
                className='btn'>Add to Cart</button>
            </div>
          ))  
        }
    </div>
  )
}

export default Products