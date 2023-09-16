import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const CartsDispatchContext = createContext(null);

const cartsReducer =(carts, action) => {
  console.log(action)
    switch (action.type) {
    case 'add': {
      const index = carts.findIndex((obj) => obj.id === action.payload.id)
      if(index === -1){
        return [...carts, {...action.payload, quantity: 1}];
      } else{
        return carts.map((obj) => {
          if(obj.id === action.payload.id) {
            return {...obj, quantity: obj.quantity + 1}
          } else{
            return obj
          }
        })
      }
    }
    case 'decrease': {
      const index = carts.findIndex((obj) => obj.id === action.payload.id)
      if (index !== -1) {
        if (carts[index].quantity === 1) {
          return carts.filter((obj) => obj.id !== action.payload.id)
        } else {
          return carts.map((cart) => {
            if (cart.id === action.payload.id) {
              return { ...cart, quantity: cart.quantity - 1}
            } else {
              return cart
            }
          })
        }
      }
    }
    case 'clear': {
      return []
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = []

const CartProvider = ({children}) => {
    const [carts, dispatch] = useReducer(cartsReducer, initialState)
    return(
    <CartContext.Provider value={carts}>
      <CartsDispatchContext.Provider value={dispatch}>
        {children}
      </CartsDispatchContext.Provider>
    </CartContext.Provider>
    )
}

export default CartProvider;

export function useCart() {
    return useContext(CartContext)
}

export function useCartDispatch() {
    return useContext(CartsDispatchContext)
}