const express = require('express');
const router = express.Router();
const story = require('../lib/story');
const util = require('../lib/util');

router.get('^(/[0-4])*$', (req, res) => {
  let id = util.getId(req);
  let options = story.getOptions(id)
  res.render('index', {
    opt_0: options[0],
    opt_1: options[1],
    opt_2: options[2], 
    opt_3: options[3],
    opt_4: options[4],
    id
  })
});

router.post('/submit', (req, res, next) => {

  story.addOption(req.body.option, req.body.id, req.body.branch);

  backURL = req.header('Referer') || '/';
  // do your thang
  res.redirect(backURL);
})

module.exports = router;