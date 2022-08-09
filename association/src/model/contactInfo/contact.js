module.exports = (sequelize, Sequelize) => {
  const contact = sequelize.define(
    "contact",
    {
      number: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
    },
    { timestamps: true }
  );

  return contact;
};
