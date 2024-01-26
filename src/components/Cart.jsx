import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { remove } from '../store/cartSlice';

function Cart() {
  const products =  useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  const removeItems = (id) =>{
    console.log(id)
      dispatch(remove(id))
  }


  const cards = products?.map((product,id)=>(
    <div key={id}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
        <Button size="small" color="primary" onClick={()=>{removeItems(product.id)}} >
          Remove From Cart
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

export default Cart
