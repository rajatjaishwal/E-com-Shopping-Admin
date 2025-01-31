    const mongoose = require('mongoose');
    const UserSchema = new mongoose.Schema({
      id: Number,
      description: String,
      category: String,
      price: Number,
      dateAdded: String,
      stock: Number,
      image: String,
    });
    const UserModel = mongoose.model("products", UserSchema);
    module.exports = UserModel;
