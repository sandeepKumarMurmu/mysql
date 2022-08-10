module.exports = (db, dataType) => {
  const post = db.define(
    "post",
    {
      title: { type: dataType.STRING },
      discription: { type: dataType.STRING },
    },
    {
      timestamps: true,
    }
  );

  return post;
};
