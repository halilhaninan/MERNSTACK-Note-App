import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import notReducer from "../features/data/dataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notlar: notReducer,
  },
});

// yeni not olustururken altta olan kod gibi dataslice olustur sonra store.js den import et reducer ile tanimla ++ data service olusturuluyor

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   notlar: [],
//   isHata: false,
//   isBasari: false,
//   isYkleniyor: false,
//   mesaj: "",
// };

// export const notSlice = createSlice({
//   name: "notlar",
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
// });

// export const { reset }  = notSlice.actions;
// export default notSlice.reducer;
