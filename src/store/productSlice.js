// import { createSlice } from "@reduxjs/toolkit";

// export const STATUSES = Object.freeze(
//     {
//         SUCCESS: 'success',
//         ERROR: 'error',
//         LOADING: 'loading'
//     }
// )



// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         data: [],
//         status: STATUSES.SUCCESS

//     },
//     reducers: {
//        setproducts(state, action) {
//         state.date = action.payload
//        },
//        setStatus(state, action) {
//         state.status = action.payload
//        }
//     }

// })

// export const {setproducts,setStatus } = productSlice.actions
// export default productSlice.reducer 

// //middleware

// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setproducts(data));
//             dispatch(setStatus(STATUSES.SUCCESS));

//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
            
//         }
//     }
// }