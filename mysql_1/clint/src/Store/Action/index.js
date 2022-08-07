const createdData = "CREATEDDATA";

export const created = (x) => {
  return {
    type: createdData,
    payload: x,
  };
};
