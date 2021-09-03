const express = require('express');
const router = express();
const Projects = require('./projects-model.js');

router.get("/", (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next);
  });

router.get('/:id', (req,res,next)=> {
    Projects.get(req.params.id)
    .then(project => {
        if(project){ 
            res.status(200).json(project)
        } else {
            res.status(404).json('Project not found')
        }
    })
    .catch(next);
})

// - Returns the newly created project as the body of the response.
// - If the request body is missing any of the required fields it responds 
// with a status code 400.
router.post('/', (req,res)=> {
    res.send('POST')
})
  
// - Returns the updated project as the body of the response.
// - If there is no project with the given `id` it responds with a status code 404.
// - If the request body is missing any of the required fields it responds 
// with a status code 400.
router.put('/:id', (req,res)=> {
    res.send('PUT')
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