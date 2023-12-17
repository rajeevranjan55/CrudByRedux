import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    arr: [],
  },
  reducers: {
    DetailsOnNextPage(state, action) {
      state.arr = [...state.arr, action.payload];
    },
    updateUser(state, action) {
        // console.log(action.payload,"actionpayload");

      let temp = state.arr;
    
      
      temp.map((item, index) => {
       
          item.name = action.payload.name;
          item.email = action.payload.email;
          item.password = action.payload.password;
          item.confirmPassword = action.payload.confirmPassword;
        
      });
      state.arr = temp;
    //   console.log(state.arr,"ghfjgsfdhjkfghjk");
    },

    deleteUser(state, action) {
      let temp = state.arr;
      let final = temp.filter((item, index) => {
        return index != action.payload;
      });
      state.arr = final;
    },
  },
});

export const {DetailsOnNextPage, updateUser, deleteUser} = UserSlice.actions;

export default UserSlice.reducer;
