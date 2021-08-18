var util=require("../util");
module.exports.getDemoUsers=async (req,res)=>{
    try{
        let users=await util.model.demoSchema.findAll({where:{id:req.params.id}})
        res.send(users)
    } catch (error) {
      console.log(error)
      res.status(500).send({message: error.message})
    }
}

module.exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    await util.model.demoSchema.sync({force: true}).then(async function () {
      var user = await util.model.demoSchema.build(req.body).save()
      res.send( user);
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({message: error.message})
  }
}

module.exports.UpdateUser = async (req, res) => {
  try {
    // console.log(req.body)
   await util.model.demoSchema.update(req.body, {where: {id: req.params.id}})
    res.send({message:"user updated successfully"});
  } catch (error) {
    console.log(error)
    res.status(500).send({message: error.message})
  }
}


module.exports.DeleteUser = async (req, res) => {
  try {
    // console.log(req.body)
    await util.model.demoSchema.destroy({where: {id: req.params.id}})
    res.status(200).send({message:"user deleted successfully"});
  } catch (error) {
    console.log(error)
    res.status(500).send({message: error.message})
  }
}


