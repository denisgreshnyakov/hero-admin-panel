import { configureStore } from "@reduxjs/toolkit";

import filters from "../components/heroesFilters/filtersSlice";
import { apiSlice } from "../api/apiSlice";

//расширяет dispatch
//midleware - функции по добавлению функционала и изменения работы dispatch
//чаще всего они позволяют принимать не только объекты, но и функции
//строки и другие конструкции. Это не только оптимизация, но и создание
//дополнительного функционала
const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

//расширяет store
const enhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);

    //меняем работу функции dispatch для того чтобы передавать строку
    const oldDispatch = store.dispatch;
    store.dispatch = (action) => {
      if (typeof action === "string") {
        return oldDispatch({
          type: action,
        });
      }
      return oldDispatch(action);
    };
    return store;
  };

// const store = createStore(
//   combineReducers({ heroes, filters }),
//   compose(
//     applyMiddleware(ReduxThunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = configureStore({
  reducer: { filters, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
