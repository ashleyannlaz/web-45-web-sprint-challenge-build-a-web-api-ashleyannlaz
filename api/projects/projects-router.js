const express = require('express');
const { validateId, validateBody } = require('./projects-middleware.js');
const router = express();
const Projects = require('./projects-model.js');

router.get("/", (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next);
  });

router.get('/:id', validateId, (req,res,next)=> {
    Projects.get(req.params.id)
    .then(project => {
            res.status(200).json(project)
    })
    .catch(next);
})

router.post('/', validateBody, (req,res)=> {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
})
  
router.put('/:id', validateId, validateBody, (req,res)=> {
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project)
    })
})

router.delete('/:id', validateId, (req,res,next)=> {
    Projects.remove(req.params.id)
    .then(() => {
        res.status(200).json()
    })
    .catch(next);
})

// - Returns an array of actions (could be empty) belonging to a project with the given `id`.
// - If there is no project with the given `id` it responds with a status code 404.
router.get('/:id/actions', (req,res)=> {
    res.send('get')
})

// eslint-disable-next-line
router.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status || 500).json({
      message: err.message,
      customMessage: "Something in users router!",
    });
  });

module.exports = router;