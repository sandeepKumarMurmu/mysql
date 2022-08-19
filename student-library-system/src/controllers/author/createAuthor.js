// importing year model
const Author = require("../../models/authorModel");

//create  author controller
const createAuthor = async (req, res) => {
  const { name, catogery } = req.body;
  try {
    const authorData = await Author.create({
      authorName: name,
      authorCatogery: catogery,
    });

    return res
      .status(200)
      .json({ message: "author created", data: authorData, status: true });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside creat author conrtoller",
      data: null,
      status: false,
      error: e,
    });
  }
};

module.exports = { createAuthor };
