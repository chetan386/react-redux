import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add} from ".././store/cartSlice" 
import { getProducts } from '../store/productSlice';
import statusCode from '../utils/status';

function Products() {

  const dispatch = useDispatch();
  const {data:products,status} = useSelector(state=> state.products)

    const addCart = (product)=>{
      dispatch(add(product))
    }
 
    useEffect(()=>{
         dispatch(getProducts());
    },[])
   
   if(status === statusCode.LOADING){
       return <p>Loading...</p>
   }
   if(status === statusCode.ERROR){
       return <p>Something went wrong, Please try again Later</p>
   }

  const cards = products.data?.map((product,id)=>(
      <div key={id}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={()=>{addCart(product)}} color="primary" >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
      </div> 
      
  ))

  return (
   
    <div style={{display:"flex", justifyContent:"space-evenly", flexWrap: "wrap"}}>
 {cards}
    </div>
  )
}

export default Products
