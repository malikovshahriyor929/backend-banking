const express = require("express");
const router = express.Router();
const GetAllPost = require("../controllers/post.controller");

router.get("/getAll", GetAllPost.getAll);
router.post("/create", GetAllPost.create);
router.put("/edit/:id", GetAllPost.edit);
router.delete("/delete/:id", GetAllPost.delete);
router.get("/get-one/:id", GetAllPost.getOne);

module.exports = router;
