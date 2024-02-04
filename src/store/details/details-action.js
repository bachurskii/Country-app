export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRIES = "@@details/SET_COUNTRIES";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBORDS = "@@details/SET_NEIGHBORDS";

const setLoading = () => ({
  type: SET_LOADING,
});
const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});
const setNeightbords = (countries) => ({
  type: SET_NEIGHBORDS,
  payload: countries,
});
const setCountris = (country) => ({
  type: SET_COUNTRIES,
  payload: country,
});
export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});
export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountris(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadNeighbordByBorder =
  (border) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(border))
      .then(({ data }) => {
        const neighbords = Array.isArray(data) ? data.map((el) => el.name) : [];
        dispatch(setNeightbords(neighbords));
      })
      .catch((error) => {
        console.error(error);

        dispatch(setNeightbords([]));
      });
  };
