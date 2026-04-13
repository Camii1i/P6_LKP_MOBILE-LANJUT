import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { products } from '../data/products'
import { addItem } from '../store/cartSlice'

const ProductScreen = () => {
  const dispatch = useDispatch()

  return (
    <View style={{ padding: 20 }}>
      {products.map(item => (
        <View key={item.id} style={{ marginBottom: 10 }}>
          <Text>{item.name} - Rp {item.price}</Text>
          <Button
            title="Tambah ke Cart"
            onPress={() => dispatch(addItem(item))}
          />
        </View>
      ))}
    </View>
  )
}

export default ProductScreen