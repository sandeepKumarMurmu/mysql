// master user model
module.exports = (db, dataType) => {
  const master_user = db.define(
    "master_user",
    {
      master_user_id: {
        type: dataType.STRING,
        autoIcrement: true,
        primaryKey: true,
      },
      master_user_name: { type: dataType.STRING },
      master_user_email: { type: dataType.STRING },
    },
    {
      timestamps: true,
    }
  );

  return master_user;
};
