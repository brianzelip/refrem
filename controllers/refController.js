const mongoose = require('mongoose');
const Reference = mongoose.model('Reference');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.flashesPage = (req, res) => {
  req.flash('success', 'Reference successfully saved!');
  res.render('test-flashes');
};

exports.addReference = async (req, res) => {
  const reference = new Reference(req.body);
  await reference.save();
  req.flash('success', 'Reference saved successfully!');
  res.redirect('/');
};

exports.getReferences = async (req, res) => {
  // 1 .query the database for a list of all references
  const references = await Reference.find();
  res.render('references', { title: 'References', references });
};
