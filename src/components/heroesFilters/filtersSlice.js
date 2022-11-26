import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

export const fetchFilters = createAsyncThunk("filters/fetchFiltres", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/filters");
});

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //запрос формируется
      .addCase(fetchFilters.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      //запрос выполнился успешно
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filtersLoadingStatus = "idle";
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  filtersChanged,
} = actions;
