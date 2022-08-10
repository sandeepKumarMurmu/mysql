module.exports = (db, dataType) => {
  const user = db.define(
    "user",
    {
      name: { type: dataType.STRING },
      email: { type: dataType.STRING },
    },
    {
      timestamps: true,
    }
  );

  return user;
};
