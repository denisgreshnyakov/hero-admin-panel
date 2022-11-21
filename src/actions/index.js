export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const filterActive = (filter) => {
  return {
    type: "FILTER_ACTIVE",
    filter: filter.target.name,
  };
};

export const heroAdd = (hero) => {
  const newObj = Object.assign({}, hero);
  return {
    type: "HERO_ADD",
    payload: newObj,
  };
};

export const heroDeleted = (id) => {
  return {
    type: "HERO_DELETED",
    id,
  };
};

export const heroesFilter = (heroes) => {
  return {
    type: "HEROES_FILTER",
    heroes,
  };
};