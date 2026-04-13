import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // (1)
import { clearCart } from '../store/cartSlice';

const CartScreen = () => { 
  const dispatch = useDispatch()    // (2)
  const items = useSelector(state => state.cart.items)  // (3)
  const total = useSelector(state => state.cart.total)  // (4)

  return ( 
    <View> 
      <Text>Total: Rp {total}</Text> 
      <Button 
        title='Kosongkan' 
        onPress={() => dispatch(clearCart())}  // (5)
      /> 
    </View> 
  ) 
} 

export default CartScreen