const models = require("../models");
const Order = models.Orders;

const create = async (req, res) => {
  const data = req.body;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
console.log(data);
  await Order.create(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
        console.log(err)
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const viewall = async (req, res) => {
  await Order.findAll()
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

  await Order.findAll({ where: { userid: data } })
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

  console.log(value, id);

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Order.update(
    {
      quanity: value,
    },
    {
      where: {
        id: id,
      },
    }
  )
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
  const data = req.body.value;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  console.log(data);
  await Order.destroy({
    where: {
      id: data,
    },
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

const destroynew = async (req, res) => {
  const data = req.body.value;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  console.log(data);
  await Order.destroy({ where: { id: data } })
    .then((data) => {
      res.send(true);
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
  destroynew,
};
