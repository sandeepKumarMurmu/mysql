const { Op } = require("sequelize");
// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing year model
const Author = require("../../models/authorModel");
const bookModel = require("../../models/bookModel");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// filter functions
const fildFilter = require("../../utils/functions/mainFilter");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting controllers
module.exports = {
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  //get author controller
  getAuthorbyId: async (req, res) => {
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
  },
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  // search author by query
  getBySearch: async (req, res) => {
    let { name, category } = req.query;

    try {
      const authorData = await Author.findAndCountAll({
        include: [
          {
            model: bookModel,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            through: { attributes: [] },
          },
        ],
        where: {
          ...fildFilter(name, "authorName", Op.substring),
          ...fildFilter(category, "authorCatogery", Op.eq),
        },
        attributes: { exclude: ["updatedAt", "createdAt"] },
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
  },

  // ------------------------------------------------------------------------------------------------------------------------------------------------
  // create author
  createAuthor: async (req, res) => {
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
  },
};
