const express = require('express');
const router = express();
const Actions = require('./actions-model')

router.get('/', (req, res, next) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status || 500).json({
      message: err.message,
      customMessage: "Something in users router!",
    });
  });

module.exports = router;