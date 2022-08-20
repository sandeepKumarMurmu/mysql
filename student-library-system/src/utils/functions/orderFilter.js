module.exports = (query, variable) => {
  let arr = [];
  if (
    query !== undefined &&
    (query.trim().toUpperCase() === "ASC" ||
      query.trim().toUpperCase() === "DESC")
  )
    arr = [variable, query.trim().toUpperCase()];

  return arr.length > 0 ? [arr] : [];
};
