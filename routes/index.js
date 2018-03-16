const express = require('express');
const router = express.Router();
// const story = require('../lib/story');

let paths = [];
// [id of previous path, branch id, string]
paths[0] = ['', 0, 'Once Upon a time, there was a wolf'];

router.get('/:id', (req, res) => {
  let opts = new Array(5);
  let id = req.params.id;
  opts[0] = paths[id][2]; 
  for (let i = 0; i < paths.length; i++) {
    let e = paths[i];  
    if(e[0] == id) opts[e[1]] = [i, e[2]]
  } 
  res.render('index', {
    opts,
    id
  })
});

router.post('/submit', (req, res, next) => {
  let p = req.body;
  if (p.option) paths.push([p.id, p.branch, p.option])
  backURL = req.header('Referer') || '/';
  res.redirect(backURL);
})

module.exports = router;