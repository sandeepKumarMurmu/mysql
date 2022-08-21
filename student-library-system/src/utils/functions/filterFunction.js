module.exports = {
  stringFilter: (name, variable, Op) => {
    let obj = {};
    if (name !== undefined && name.trim().length)
      obj[variable] = { [Op]: name.trim().toLowerCase() };

    return obj;
  },
  orderFitler: (query, variable) => {
    let arr = [];
    if (
      query !== undefined &&
      (query.trim().toUpperCase() === "ASC" ||
        query.trim().toUpperCase() === "DESC")
    )
      arr = [variable, query.trim().toUpperCase()];

    return arr.length > 0 ? [arr] : [];
  },
};
