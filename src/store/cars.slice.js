import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CarsServices} from "../Components/services/cars.services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_,{rejectWithValue})=>{
        try {
            const car = await CarsServices.getCars();
            return car;
        }
        catch (e){
            console.log(e.response.data.detail);
            return rejectWithValue(e.response.data.detail)
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
        },

    extraReducers:{
        [getAllCars.pending]:(state)=>{
            state.status = 'pending'

        },
        [getAllCars.fulfilled]: (state,action) =>{
state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
    }
})

const carReducer = carSlice.reducer;
export const {addCar,deletCar}= carSlice.actions;
export default carReducer;
