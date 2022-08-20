// importing year model
const Author = require("../../models/authorModel");
const bookModel = require("../../models/bookModel");

const mainFilter = require("../../utils/functions/mainFilter");

const { Op } = require("sequelize");
//create  author controller
const getAuthorbyId = async (req, res) => {
  try {
    const authorData = await Author.findByPk(+req.params.id, {
      include: [{ model: bookModel }],
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
const getBySearch = async (req, res) => {
  let { name, stream } = req.query;

  try {
    const authorData = await Author.findAll({
      where: { ...mainFilter(name, "authorName", Op, {}) },
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

module.exports = { getAuthorbyId, getBySearch };
