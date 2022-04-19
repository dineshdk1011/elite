const models = require('../models');
const User = models.User

const create = async (req, res) => {
    const data = req.body;

    if (!req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.create(data).then(data => {
        res.json(data);
    }).catch(err => {
        res.send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}

const viewall = async (req, res) => {
    await User.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}

const view = async (req, res) => {
    const data = req.body.userid;
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.findAll({ where: { userid: data } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}

const viewbyRef = async (req, res) => {
    const data = req.body.directrefferal;
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.findAll({ where: { directrefferal: data } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}


const viewtree = async (req, res) => {
    const data = req.params.id;
    console.log(data)
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.findAll({ where: { userid: data } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}


const viewrect = async (req, res) => {
    const data = req.body.refferal;
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.findAll({ where: { refferal: data } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}

const update = async (req, res) => {
    const value = req.body.profile;
    const id = req.body.userid
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.update(value, {
        where: {
            userid: id
        }
    }).then(() => {
        res.send("Updated Successfully");
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}



const destroy = async (req, res) => {
    const data = req.body;

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    await User.destroy({
        where: data
    }).then(() => {
        res.send("Deleted Successfully");
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}

module.exports = {
    create,
    viewall,
    viewtree,
    viewrect,
    view,
    update,
    destroy,
    viewbyRef
}