module.exports = (sequelize, Sequelize) => {
  const vehicle = sequelize.define(
    "vehicle",
    {
      name: { type: Sequelize.STRING, allowNull: false },
      model: { type: Sequelize.STRING, allowNull: false },
      type: { type: Sequelize.STRING, allowNull: false },
    },
    { timestamps: true }
  );

  return vehicle;
};
