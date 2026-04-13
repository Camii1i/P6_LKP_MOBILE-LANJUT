import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import CartScreen from './src/screens/CartScreen'
import ProductScreen from './src/screens/ProductScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Produk" component={ProductScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}