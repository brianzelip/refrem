const mongoose = require('mongoose');
const Reference = mongoose.model('Reference');

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Add a Reference to Remember',
    css: 'dist/refrem.css',
    author: 'Brian Zelip',
    description: 'to be or not to be',
    keywords: ['isolate', 'rejoice', 'Moose Bug']
  });
};

exports.addReference = async (req, res) => {
  const reference = new Reference(req.body);
  await reference.save();
  res.json(req.body);
};
