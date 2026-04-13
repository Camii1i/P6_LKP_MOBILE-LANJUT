import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({ 
  name: 'cart',          // (1)
  initialState: { 
    items: [], 
    total: 0,            // (2)
  }, 
  reducers: { 
    addItem: (state, action) => { 
      // (3)
      state.items.push(action.payload)
      // (4)
      state.total += action.payload.price
    }, 
    removeItem: (state, action) => { 
      // (5)
      state.items = state.items.filter(item => item.id !== action.payload)
    }, 
    clearCart: (state) => { 
      // (6)
      state.items = []
      state.total = 0
    }, 
  }, 
}) 

// (7)
export const { addItem, removeItem, clearCart } = cartSlice.actions

// (8)
export default cartSlice.reducer