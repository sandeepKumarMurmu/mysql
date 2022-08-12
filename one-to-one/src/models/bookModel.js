//user's post model to create post
module.exports = (db, dataType) => {
  const book = db.define(
    "book",
    {
      book_id: {
        type: dataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      book_title: { type: dataType.STRING },
      book_description: { type: dataType.STRING },
    },
    {
      timestamps: true,
    }
  );

  return book;
};
