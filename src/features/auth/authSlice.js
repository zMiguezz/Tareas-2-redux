import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = ({
    user: null,
    isError: false,
    isSucces: false, 
    isLoading: false,
    message: ''
})

//registrar un usuario 
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    }catch (error){
        
    } 
}) 


export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false 
            state.isError = false 
            state.isSucces = false
            state.message = ""
        }
        
    }, extraReducers: () => {

    }

})

export const {reset} = authSlice.actions
export default authSlice.reducer
