//user's post model to create post
module.exports = (db, dataType) => {
  const user_post = db.define(
    "user_post",
    {
      post_id: {
        type: dataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      post_title: { type: dataType.STRING },
      post_description: { type: dataType.STRING },
    },
    {
      timestamps: true,
    }
  );

  return user_post;
};
