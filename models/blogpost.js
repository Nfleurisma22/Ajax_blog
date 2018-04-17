const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');
const blogpostsPath = path.join(__dirname, '..', 'data', 'blogposts.json');
const blogpostsJSON = fs.readFileSync(blogpostsPath, 'utf8');
const blogpostsArray = JSON.parse(blogpostsJSON);

const readAll = () => blogpostsArray;

const readOne = (blogpost_id) => {
  const filteredBlogposts = blogpostsArray.filter( blogpost => blogpost.id === blogpost_id );
  return filteredBlogposts[0];
}

const create = ({title, content}) => {
  const newBlogpost = {
    id: uuid(),
    title,
    content
  };
  blogpostsArray.push(newBlogpost);
  const blogpostsJSON = JSON.stringify(blogpostsArray);
  fs.writeFileSync(blogpostsPath, blogpostsJSON);
  return newBlogpost;
}

const update = (blogpost_id, updates) => {
  let updatedBlogpost;
  const updatedBlogposts = blogpostsArray.map(blogpost => {
    if (blogpost.id === blogpost_id) {
      updatedBlogpost = {...blogpost, ...updates};
      return updatedBlogpost;
    } else {
      return blogpost;
    }
  });
  fs.writeFileSync(blogpostsPath, JSON.stringify(updatedBlogposts));
  return updatedBlogpost;
}

const destroy = (blogpost_id) => {
  let deletedBlogpost;
  const remainingBlogposts = blogpostsArray.filter(blogpost => {
    if (blogpost.id === blogpost_id) {
      deletedBlogpost = blogpost;
    } else {
      return blogpost;
    };
  });
  fs.writeFileSync(blogpostsPath, JSON.stringify(remainingBlogposts));
  return deletedBlogpost;
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
