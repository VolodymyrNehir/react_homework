import {createSlice} from '@reduxjs/toolkit';

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        addCar:(state,action)=>{},
        deletCar:(state,action)=>{}
    }
})
const carReducer = carSlice.reducer;
export const {addCar,deletCar}= carSlice.actions;
export default carReducer;