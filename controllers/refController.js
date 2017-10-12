exports.homePage = (req, res) => {
  res.render('addRef');
};

exports.refSubmission = (req, res) => {
  res.render('submitSuccess', req.body);
};
