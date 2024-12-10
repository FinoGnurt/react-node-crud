const User = require("../models/user");

const create = async (req, res) => {
  const { title, description, content } = req.body;
  if ((!title, !description, !content)) throw new Error("Missing input!");

  const rs = await User.create({ title, description, content });
  res.json({ success: rs ? true : false, rs });
};

const get = async (req, res) => {
  const rs = await User.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
  });
  res.json({ success: rs ? true : false, rs });
};

const put = async (req, res) => {
  const { id } = req.params;
  const { title, description, content } = req.body;

  const rs = await User.update(
    { title, description, content },
    {
      where: { id },
    }
  );

  //rs => 1 & 0

  res.json({ success: rs[0] === 1 ? true : false });
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const rs = await User.destroy({
    where: {
      id,
    },
  });

  //   console.log(rs); => 1 & 0
  res.json({ success: rs === 1 ? true : false });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const rs = await User.findOne({ where: { id } });
  res.json({ success: rs ? true : false, rs });
};

module.exports = { create, get, put, destroy, getOne };
