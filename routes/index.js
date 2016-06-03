var express = require('express');
var router = express.Router();
var reasons = require('../data');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: reasons.title });
});

/* GET how-to-hate-Bennett route */
router.get('/how-to-hate-bennett', function (request, response) {
  response.render('how-to-hate-bennett', { steps: reasons.firstSteps,
                                          title: "First Steps",
                                          back: '/',
                                          next: '/how-to-hate-bennett/keep-going',
                                          image: reasons.images[1]
                                         });
});

router.get('/how-to-hate-bennett/keep-going', function(request, response) {
  response.render('how-to-hate-bennett', { steps: reasons.secondSteps,
                                           title: "Second Steps",
                                           back: '/how-to-hate-bennett',
                                           next: '/how-to-hate-bennett/keep-going/last-steps',
                                           image: reasons.images[2]
                                         });
});

router.get('/how-to-hate-bennett/keep-going/last-steps', function(request, response) {
  response.render('how-to-hate-bennett', { steps: reasons.thirdSteps,
                                           title: "Last Steps!",
                                           back: '/how-to-hate-bennett/keep-going',
                                           next: '/how-to-hate-bennett/keep-going',
                                           image: reasons.images[0]
                                         });
});



module.exports = router;
