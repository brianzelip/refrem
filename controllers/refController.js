exports.homePage = (req, res) => {
  res.render('index', { title: 'Add a Reference to Remember' });
};

exports.addReference = (req, res) => {
  res.json(req.body);
};
