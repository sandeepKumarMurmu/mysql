const { userx } = require("../../config/db");

module.exports = async (req, res) => {
  try {
    const data = await userx.create({ name: "name1", father: "father_1" });
return res.json({data,message:"userCreated"})  
} catch (e) {
    return res.json({ message: "error in creat controller user", e });
  }
};


