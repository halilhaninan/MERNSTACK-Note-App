import girisReducer from "./giris";
import hesapla from "./hesapla";
import { combineReducers } from "redux";
import hesaplaReducer from "./hesapla";

const butunRreducerler = combineReducers({
  hesapla: hesaplaReducer,
  giris: girisReducer,
});

export default butunRreducerler;
