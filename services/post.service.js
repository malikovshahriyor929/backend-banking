const postModel = require("../models/post.model");
const fileService = require("./file.service");

class PostServer {
  async create(post, picture) {
    const fileName = fileService.save(picture);
    const newPost = await postModel.create({ ...post, picture: fileName });
    return newPost;
  }
  async getAll() {
    const allPosts = await postModel.find();
    return allPosts;
  }
  async delete(id) {
    const post = await postModel.findByIdAndDelete(id);
    return post;
  }
  async edit(postEdited, id) {
    if (!id) {
      throw new Error("id not found");
    }
    const isPost = await this.getOne(id);
    if (!isPost) {
      throw new Error("Data not found");
    }
    const post = await postModel.findByIdAndUpdate(id, postEdited, {
      new: true,
    });
    return post;
  }
  async getOne(id) {
    const post = await postModel.findById(id);
    return post;
  }
}

module.exports = new PostServer();
