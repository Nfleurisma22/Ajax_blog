// controllers/blogposts.js

const blogpostModel = require('../models/blogpost');
const readAll = (request, response) => {
  const blogposts = blogpostModel.readAll();
  response.send(blogposts);
}

const readIndividual = (request, response) => {
  const blogpost = blogpostModel.readIndividual(request.parms.id);
  response.send(blogpost);
}

const create = (request, response) => {
  const blogpost = blogpostModel.create(request.body);
  response.send(blogpost);
}

const update = (request, response) => {
  const blogpost = blogpostModel.update(request.params.id);
  response.send(blogpost);
}

const destroy= (request, response) => {
  const blogpost = blogpostModel.destroy(request.params.id);
  response.send(blogpost);
}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
};
