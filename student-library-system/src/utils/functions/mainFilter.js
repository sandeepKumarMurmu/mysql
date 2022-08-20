module.exports = (name, variable, Op) => {
  let obj = {};
  if (name !== undefined && name.trim().length)
    obj[variable] = { [Op]: name.trim().toLowerCase() };

  return obj;
};
