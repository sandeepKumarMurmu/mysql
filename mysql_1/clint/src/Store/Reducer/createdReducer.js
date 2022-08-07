export const CreatedReducer = (state = 0, action) => {
  if (action.type === "CREATEDDATA") {

    state += 1;
    return state;
  }
  return state;
};
