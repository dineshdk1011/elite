const models = require("../models");
const Category = models.Category;

const create = async (req, res) => {
  const data = req.body;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Category.create(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const viewall = async (req, res) => {
  await Category.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const view = async (req, res) => {
  const data = req.body.id;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Category.findByPk(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const update = async (req, res) => {
  const value = req.body.value;
  const id = req.body.id;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Category.update(value, {
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const destroy = async (req, res) => {
  const data = req.body;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Category.destroy({
    where: data,
  })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
};
