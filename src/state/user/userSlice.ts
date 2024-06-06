import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  language: string;
}

const initialState: UserState = {
  language: 'PT-PT'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeLanguageAsync.pending, () => {
        console.log('changing language...');
      })
      .addCase(
        changeLanguageAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.language = action.payload;
        }
      );
  }
});

export const { changeLanguage } = userSlice.actions;

// purely for test purposes. later we'll use this to get user upon authentication and maybe also update
export const changeLanguageAsync = createAsyncThunk(
  'user/changeLanguageAsync',
  async (language: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return language;
  }
);

export default userSlice.reducer;
