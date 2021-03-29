import { init, state, connect } from "react-rest-state";

const initState = {
  _globalUserData: null,
};
export const initGlobalState = () =>
  init({
    ...initState
  });
export const connectToState = (arrState, callback) =>
  connect(
    () => {
      callback(state);
    },
    arrState
  );
export const getState = stateName => {
  return state[stateName];
};
