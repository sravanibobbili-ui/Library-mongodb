"use strict";
const mongoose = require('mongoose')

const StudentSchema = new  mongoose.Schema({
      slno:Number,
      username: String,
      name: String,
      address: String,
      country: String,
      
})

const StudentModel = mongoose.model("student",StudentSchema)
module.exports = StudentModel