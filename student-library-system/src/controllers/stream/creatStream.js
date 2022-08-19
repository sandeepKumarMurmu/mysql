// importing year model
const Stream = require("../../models/streamModel");

//create  Student controller
const createStream = async (req, res) => {
  const { streamCode, streamName } = req.body;
  try {
    const streamData = await Stream.create({ streamCode, streamName });

    return res
      .status(200)
      .json({ message: "stream created", data: streamData, status: true });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside creat stream conrtoller",
      data: null,
      status: false,
    });
  }
};

module.exports = { createStream };
