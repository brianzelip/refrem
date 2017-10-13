const mongoose = require('mongoose');
const Reference = mongoose.model('Reference');

exports.homePage = (req, res) => {
  res.render('index', { title: 'Add a Reference to Remember' });
};

exports.addReference = async (req, res) => {
  const reference = new Reference(req.body);
  await reference.save();
  res.json(req.body);
};
