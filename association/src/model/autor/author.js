module.exports = (sequelize, Sequelize) => {
  const autor = sequelize.define(
    "autor",
    {
      name: { type: Sequelize.STRING },
      interest: { type: Sequelize.STRING, allowNull: false },
    },
    { timestamps: true }
  );

  return autor;
};
