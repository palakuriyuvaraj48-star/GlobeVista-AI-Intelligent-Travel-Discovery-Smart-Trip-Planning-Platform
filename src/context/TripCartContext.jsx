import { createContext, useContext, useReducer, useState } from 'react'

const TripCartContext = createContext()

// Initial state
const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false
}

// Reducer function
function tripCartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    
    default:
      return state
  }
}

// Provider component
export function TripCartProvider({ children }) {
  const [state, dispatch] = useReducer(tripCartReducer, initialState)
  
  // Calculate totals whenever items change
  const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  
  const value = {
    ...state,
    total,
    itemCount,
    addItem: (item) => dispatch({ type: 'ADD_TO_CART', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }),
    updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' })
  }
  
  return (
    <TripCartContext.Provider value={value}>
      {children}
    </TripCartContext.Provider>
  )
}

// Hook to use the context
export function useTripCart() {
  const context = useContext(TripCartContext)
  if (!context) {
    throw new Error('useTripCart must be used within a TripCartProvider')
  }
  return context
}

export default TripCartContext
