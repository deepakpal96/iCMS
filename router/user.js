const express = require("express");
const router = express.Router();
var User = require("../Schema/user");

router.post("/", async (req, res) => {
  try {
        const user = new User();
        user.name=req.body.name;
        await user.save();
        res.send({userDetails: user})

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, data: null });
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    let result = await User.findOneAndUpdate({ _id: req.params.id},req.body,{new:true}).exec();
    res.send({userDetails: result})

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, data: null });
  }
});

router.get("/", async (req, res) => {
  const result = await User.find().exec();
  res.send({userList: result})
});

router.get("/:id", async (req, res) => {
  const result = await User.find({_id:req.params.id}).exec();
  res.send({user: result})
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete({_id: req.params.id});
    res.send({deleatedUser: user})
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, data: null });  }
})

module.exports = router;
