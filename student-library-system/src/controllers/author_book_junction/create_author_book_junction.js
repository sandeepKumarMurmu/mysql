// importing year model
const authorBookJunction = require("../../models/author_book_junction");

//create  Student controller
const createAuthorBookJunction = async (req, res) => {
  try {
    const authorBookJunctionData = await authorBookJunction.create(req.body);

    return res.status(200).json({
      message: "authorBookJunctionData created",
      data: authorBookJunctionData,
      status: true,
    });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside creat authorBookJunction conrtoller",
      data: null,
      status: false,
    });
  }
};

module.exports = { createAuthorBookJunction };
