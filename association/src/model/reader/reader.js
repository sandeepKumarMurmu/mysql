module.exports = (sequelize,Sequelize) => {
  const reader = sequelize.define(
    "reader",
    {
      fullName:{type:Sequelize.STRING,allowNull:false},
      department:{type:Sequelize.STRING,allowNull:false},
    },
    { timestamps: true }
  );

  return reader;
};
