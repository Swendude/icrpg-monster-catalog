import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type MonsterStats = MonsterStat[]


export const ALL_ATTRS = ["STR", "DEX", "CON", "WIS", "INT", "CHA"] as const
export type AttributeName = typeof ALL_ATTRS[number]

export const ALL_EFFS = ["Basic", "Weapon/Tool", "Gun", "Magic/Energy", "Ultimate"] as const
type EffortName = typeof ALL_EFFS[number]

type MonsterStat = {
  name: AttributeName | EffortName;
  value: number;
};

type MonsterState = {
  name: string;
  hearts: number;
  stats: MonsterStats;
};

const initialState: MonsterState = {
  name: "Duranthrax",
  hearts: 6,
  stats: [{name:'STR', value: 8}],
};

export const monsterSlice = createSlice({
  name: "monster",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeName: (state: MonsterState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    increaseHearts: (state: MonsterState) => {
      state.hearts += 1;
    },
    decreaseHearts: (state: MonsterState) => {
      state.hearts -= 1;
    },
    addAtrribute: (state: MonsterState, action: PayloadAction<MonsterStat>) => {
     return {...state, stats: [...state.stats, action.payload]}
    }
}});

export const { changeName, increaseHearts, decreaseHearts, addAtrribute } =
  monsterSlice.actions;

export const selectName = (state: RootState) => state.monster.name;
export const selectHearts = (state: RootState) => state.monster.hearts;
export const selectStats = (state: RootState) => state.monster.stats;
export default monsterSlice.reducer;
