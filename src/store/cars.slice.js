import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CarsServices} from "../Components/services/cars.services";


export const getAllCars = createAsyncThunk(
    'getAllCars/carSlice',
    async ()=>{
        try {
const cars = await CarsServices.getCars()
            return cars
        }
        catch (e){

        }
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState:{
        cars:[]
    },
    reducers:{
        addCar:(state,action)=>{
            state.cars.push({id: Date.now() ,...action.payload.e})
        },
        deletCar:(state,action)=>{
          state.cars = state.cars.filter(value => value.id !== action.payload.id)
        }
    },
    extraReducers:{
        [getAllCars.pending]: (state)=>{
            state.status = 'pending'
            tate.error = null
        },
        [getAllCars.fulfilled]: (state) =>{

        }
    }
})


const carReducer = carSlice.reducer;
export const {addCar,deletCar}= carSlice.actions;
export default carReducer;
