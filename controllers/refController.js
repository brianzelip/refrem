const mongoose = require('mongoose');
const Reference = mongoose.model('Reference');

exports.homePage = (req, res) => {
  res.render('index');
};

};

exports.addReference = async (req, res) => {
  const reference = new Reference(req.body);
  await reference.save();
  res.redirect('/');
};
