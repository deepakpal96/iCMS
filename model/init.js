const sequelize=require("../config/connection");
var Demo_model=require("./demo");
var util=require("../util");

module.exports=function(){
 util.model.demoSchema=sequelize.define("users",Demo_model.demoSchema,{freezeTableName: true,})
}
