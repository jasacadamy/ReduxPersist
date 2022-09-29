import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

const initialState = {
  auth: false,
  uid: '',
  email: '',
  loading: false,
};

export const registerAccount = createAsyncThunk(
  'auth/register',
  async ({email, password}) => {
    await auth().createUserWithEmailAndPassword(email, password);
    let user = await auth().currentUser._user;
    console.log(user);
    return user;
  },
);

export const loginAccount = createAsyncThunk(
  'auth/login',
  async ({email, password}) => {
    await auth().signInWithEmailAndPassword(email, password);
    let user = await auth().currentUser._user;
    return user;
  },
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  let user = await auth().currentUser;
  if (user) {
    await auth().signOut();
  }
  return {};
});

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //register case
    builder.addCase(registerAccount.pending, state => {
      state.loading = true;
      state.email = '';
      state.uid = '';
      state.auth = false;
    });
    builder.addCase(registerAccount.fulfilled, (state, actions) => {
      state.loading = false;
      state.auth = true;
      state.email = actions.payload.email;
      state.uid = actions.payload.uid;
    });
    builder.addCase(registerAccount.rejected, (state, actions) => {
      state.loading = false;
      state.auth = false;
      state.email = '';
      state.uid = '';
    });

    //login case

    builder.addCase(loginAccount.pending, state => {
      state.loading = true;
      state.email = '';
      state.uid = '';
      state.auth = false;
    });
    builder.addCase(loginAccount.fulfilled, (state, actions) => {
      state.loading = false;
      state.auth = true;
      state.email = actions.payload.email;
      state.uid = actions.payload.uid;
    });
    builder.addCase(loginAccount.rejected, (state, actions) => {
      state.loading = false;
      state.auth = false;
      state.email = '';
      state.uid = '';
    });

    //signout

    builder.addCase(signOut.fulfilled, (state, actions) => {
      state.loading = false;
      state.auth = false;
      state.email = '';
      state.uid = '';
    });
  },
});

export const {authenticate} = authSlicer.actions;

export default authSlicer.reducer;
