import {createSlice} from '@reduxjs/toolkit'



const cartSlice  = createSlice({
    name:'cart',
    initialState:{
        items : JSON.parse(localStorage.getItem('cartitems')) || []
    },
    reducers :{
        addtocart(state,action){
            // directly mutate state
            // instead of doing this return [...state, action.payload]
            state.items.push(action.payload)
            localStorage.setItem('cartitems',JSON.stringify(state.items))
        },
        removefromcart(state,action){
       const updatecart = state.items.filter((item)=>{
                  if (item.id!==action.payload) {
                    return item
                  }
            })
            state.items=updatecart
            
            localStorage.setItem('cartitems',JSON.stringify(updatecart))
            
            
            
           
        }
    }
})

export const {addtocart,removefromcart} =cartSlice.actions
export default cartSlice.reducer