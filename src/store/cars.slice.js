import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CarsServices} from "../Components/services/cars.services";

const initialState = {
    cars: [],
    status: '',
    error: '',
    upCar: {id: '', model: '', price: '', year: ''}


}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const car = await CarsServices.getCars();
            return car;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const creatCars = createAsyncThunk(
    'carSlice/creatCars',
    async ({data}, {dispatch}) => {
        try {
            const nevCar = await CarsServices.createCars(data);
            dispatch(addCar({data: nevCar}))
        } catch (e) {

        }
    }
)
export const deleteCaars = createAsyncThunk(
    'carSlice/deleteCaars',
    async ({id}, {dispatch}) => {
        try {
            await CarsServices.deleteCrs(id);
            dispatch(deletCar({id}))
        } catch (e) {

        }
    }
)

export const updateCars = createAsyncThunk(
    'carSlice/updateCars',
    async ({id, newCar}, {dispatch}) => {

        try {
            await CarsServices.updateCar(id, newCar);
            dispatch(setUpdateCars({id: '', model: '', price: '', year: ''}));
            dispatch(updateState({...newCar, id: id}));
        } catch (e) {
            console.log(e);
        }
    });


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deletCar: (state, action) => {
            state.cars = state.cars.filter(value => value.id !== action.payload.id);
        },
        setUpdateCars: (state, action) => {
            state.upCar = action.payload
        },
        updateState: (state, action) => {
            state.cars = state.cars.map(car => (car.id === action.payload.id ? action.payload : car));
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending';

        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }

})

const carReducer = carSlice.reducer;
export const {addCar, deletCar, setUpdateCars, updateState} = carSlice.actions;
export default carReducer;
