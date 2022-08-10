module.exports = (sequelize, Sequelize) => {
  const book = sequelize.define("book", {
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    field: { type: Sequelize.STRING, allowNull: false },
    count: { type: Sequelize.INTEGER },
  });

  return book;
};
