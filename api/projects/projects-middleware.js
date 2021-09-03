const Projects = require('./projects-model.js');

function validateId (req, res, next) {
    const { id } = req.params;
    Projects.get(id)
      .then((possibleProject) => {
        if (possibleProject) {
          req.user = possibleProject;
          next();
        } else {
          next({ message: "not found", status: 404 });
        }
      })
      .catch(next);
  }

  function validateBody (req, res, next) {
    if (!req.body.name || !req.body.description || req.body.completed == null ) {
      next({ status: 400, message: "missing required text field" });
    } else {
      next()
    }
  }
  
  
  module.exports = { validateId, validateBody }
