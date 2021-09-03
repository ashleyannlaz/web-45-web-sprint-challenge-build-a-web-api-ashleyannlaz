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

// - Returns the newly created project as the body of the response.
// - If the request body is missing any of the required fields it responds 
// with a status code 400.
router.post('/', (req,res)=> {
    res.send('POST')
})
  
router.put('/:id', validateId, validateBody, (req,res)=> {
    console.log(req.body.completed)
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project)
    })
})

// - Returns no response body.
// - If there is no project with the given `id` it responds with a status code 404.
router.delete('/:id', (req,res)=> {
    res.send('DELETE')
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