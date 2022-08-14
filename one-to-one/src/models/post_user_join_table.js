// master user model
module.exports = (db, dataType, user, post) => {
  const join_table = db.define(
    "join_table",
    {},
    {
      timestamps: false,
    }
  );

  return join_table;
};
