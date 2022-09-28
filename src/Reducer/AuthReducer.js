import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  auth: false,
};

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: state => {
      state.auth = true;
    },
  },
});

export const {authenticate} = authSlicer.actions;

export default authSlicer.reducer;
