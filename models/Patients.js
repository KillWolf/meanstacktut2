var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
	name: String,
	age: Number,
	
});

mongoose.model('Patient', PatientSchema);