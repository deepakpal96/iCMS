var demoController=require("./controller/demo");

module.exports=function(router){
router.route("/api/users/:id").get(demoController.getDemoUsers)
router.route("/api/users").post(demoController.createUser)
router.route("/api/users/:id").put(demoController.UpdateUser)
router.route("/api/users/:id").delete(demoController.DeleteUser)
}
