const mongoose = require('mongoose');
// have to tell mongoose that we're using ES6 async/await
mongoose.Promise = global.Promise;

const referenceSchema = new mongoose.Schema(
  {
    refUrl: {
      type: String,
      trim: true
    },
    commentsUrl: {
      type: String,
      trim: true
    },
    source: String,
    category: String
  },
  {
    timestamps: true
  }
);

// referenceSchema.pre('save', function(next) {
//   this.timeStamp = Date.now();
//   next();
// }); // needs to be a long-form function because we need `this`, so arrow func won't do

module.exports = mongoose.model('Reference', referenceSchema);
