module.exports = (name, variable, Op, obj) => {
  if (name !== undefined && name.trim().length)
    obj[variable] = { [Op.substring]: name.trim() };

  return obj;
};
