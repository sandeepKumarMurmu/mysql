module.exports = (sequelize,Sequelize) => {
  const userx = sequelize.define(
    "userx",
    {
      name: { type: Sequelize.STRING },
      father: { type: Sequelize.STRING },
    },
    { timestamps: true }
  );

  return userx;
};
