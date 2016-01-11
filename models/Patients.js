var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
	ipadid: Number,
	name: String,
	surname: String,
	age: Number,
	kolcategory: String,
	video: String,
	patientjournal: String,
	additionalinfo: String,
	
});

mongoose.model('Patient', PatientSchema);