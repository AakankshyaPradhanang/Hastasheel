var express = require('express');
var router = express.Router();


var users = require('../models/users');
var noteClass = require('../models/notes');

router.use(express.static('../'))


router.get('/', express.static('C:/Users/aakan/Desktop/Hastasheel/'))


router.get('/login', function(req, res){
	res.render('login');
});

router.get('/signup', function(req, res){
	res.render('signup');
});

router.post('/signup',function(req, res){
	console.log('req.....', req.body);
	var user = new users({
		username: req.body.username,
		password: req.body.password

	});
	var promise = user.save()
	promise.then((user) => {
		console.log('user signed up with values', user);
	});
})
router.get('/addnote', function(req, res){
	res.render('addnote');
});


router.get('/viewnote', function(req, res){
	//res.render('viewnote');
	noteClass.find().exec(function(err, notes){
			res.render('viewnote',{notes})
		});
});

router.post('/addnote',function(req, res){
	console.log('request', req.body);
	var note = new noteClass({
		title: req.body.title,
		content: req.body.note
	});
	var promise = note.save();
	promise.then ((note) => {
		console.log('your notes:',note);
		noteClass.find().exec(function(err, notes){
			res.render('viewnote',{notes})
		});
	});
});


router.post('/login', function(req,res){
	 if(req.body.username  && req.body.password) {
	 	users.findOne({
	 		username: req.body.username,
	 		password: req.body.password
	 	},function(err,user){
	 		console.log('logged in user',user);
	 	})
	 
 }
  else{
		console.log('Enter corect username and passowrd');
	}

});

router.get('/deleteNote/:id', function(req, res){
	console.log(req.params.id);
  noteClass.remove({ _id : req.params.id },function(err, delNote){
    res.redirect('/viewnote');
  });
})

router.get('/editNote/:id', function(req, res){
 var noteId = req.params.id;
  noteClass.findOne({ _id : noteId }).exec(function(err, note){
    res.render('edit',{note});
  });
})

router.post('/editNote', function(req,res){
	noteClass.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, (err,note) => {
		console.log('note update.........', note);
		if(!err) res.redirect('/viewnote')
	    });
    })
	







module.exports = router;
