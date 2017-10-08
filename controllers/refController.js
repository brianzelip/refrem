exports.homePage = (req, res) => {
  res.render('index');
};

exports.refSubmission = (req, res) => {
  res.render('submitSuccess', req.body);
};
