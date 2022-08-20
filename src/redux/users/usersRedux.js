import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUsers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.currentUsers = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    //ADD
    addUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUsersSuccess: (state, action) => {
      state.currentUsers.push(action.payload);
      state.isFetching = false;
      state.error = false;
    },
    addUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  addUsersStart,
  addUsersSuccess,
  addUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
