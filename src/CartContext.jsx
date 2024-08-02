import React, { useReducer } from 'react'
import { createContext ,useContext } from 'react'


const cartContext = createContext()

export function CartProvider({children}){

    function cartReducer(state , function ){
        switch(action.type){
            case 'add':
                return [...state , action.item]
            case 'remove':
                const itemIndex = state.findIndex((item) => item.id === action.item.id)
                let newCart = [...state]
                if(itemIndex >= 0){
                    newCart.splice(itemIndex , 1)
                }else{
                    console.warn(`Cant remove product (id: ${action.item.id}) as its not in cart!`)
                }
                return newCart
            default:
                return state
        }
    }
        const[cartState , cartDispatch ] = useReducer(cartReducer , initialState );
        return <CartContext.Provider>{children}</CartContext.Provider>
}

export function useCart {
    return useContext(cartContext)
}