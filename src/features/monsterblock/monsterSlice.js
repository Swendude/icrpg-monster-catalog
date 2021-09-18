import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Duranthrax",
};

export const monsterSlice = createSlice({
  name: "monster",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = monsterSlice.actions;

export const selectName = (state) => state.monster.name;

export default monsterSlice.reducer;
