var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

router.get('/patients', function(req, res, next) {
  Patient.find(function(err, patients){
    if(err){ return next(err); }

    res.json(patients);
  })
});

router.post('/patients', function(req, res, next) {
  var patient = new Patient(req.body);

  patient.save(function(err, patient){
    if(err){ return next(err); }

    res.json(patient);
  });
});

router.delete('/patients/:patient', function(req, res, next) {
    req.patient.remove(function(err, patient){
      if (err) { return next(err); }
      res.json(patient);
    });
});

router.put('/patients/:patient', function(req, res, next) {
    req.patient.ipadid = req.body.ipadid;
    req.patient.name = req.body.name;
    req.patient.surname = req.body.surname;
    req.patient.age = req.body.age;
    req.patient.kolcategory = req.body.kolcategory;
    req.patient.video = req.body.video;
    req.patient.patientjournal = req.body.patientjournal;
    req.patient.additionalinfo = req.body.additionalinfo;
    req.patient.save(function(err, patient) {
      if (err) { return next(err); }
      res.json(patient);
    });
});

router.param('patient', function(req, res, next, id) {
  var query = Patient.findById(id);

  query.exec(function (err, patient){
    if (err) { return next(err); }
    if (!patient) { return next(new Error('can\'t find patient')); }

    req.patient = patient;
    return next();
  });
});

router.get('/patients/:patient', function(req, res) {
  res.json(req.patient);
});

module.exports = router;
