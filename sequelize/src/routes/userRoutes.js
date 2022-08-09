const PostRout=require("./postendpoints/user")
const GetRoute=require("./getendpoints/user/index")
const DeleteRoute = require("./deleteendpoints/user")
const UpdateRoute=require("./updateendpoints/user")

module.exports=(app)=>{
app.use('/api/v1',PostRout);
app.use('/api/v1',GetRoute);
app.use('/api/v1',DeleteRoute);
app.use('/api/v1',UpdateRoute);

}