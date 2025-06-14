const PostServer = require("../services/post.service");

class GetAllPost {
  async getAll(req, res) {
    try {
      const allPost = await PostServer.getAll();
      res.status(200).json(allPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async create(req, res) {
    try {
      const post = await PostServer.create(req.body, req.files.picture);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async edit(req, res) {
    try {
      const { body, params } = req;

      const post = await PostServer.edit(body, params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
      const post = await PostServer.delete(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostServer.getOne(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new GetAllPost();
