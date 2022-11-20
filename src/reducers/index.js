const initialState = {
  minId: 4,
  heroes: [],
  heroesLoadingStatus: "idle",
  filtersLoadingStatus: "idle",
  filters: [],
  activeFilter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };

    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "FILTERS_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "idle",
      };
    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };
    case "FILTER_ACTIVE":
      return {
        ...state,
        activeFilter: action.filter,
      };
    case "HERO_ADD":
      state.heroes.push(action.hero);
      console.log(state.heroes);
      return {
        ...state,
        heroes: state.heroes,
        heroesLoadingStatus: "idle",
      };
    case "HERO_DELETED":
      return {
        ...state,
        heroes: state.heroes.filter((item) => item.id !== action.id),
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FILTER":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
