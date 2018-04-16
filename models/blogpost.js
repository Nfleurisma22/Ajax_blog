// models/blogposts.js

const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');
const blogpostsPath = path.join(__dirname, '..', 'data', 'blogposts.json');
const blogpostsJSON = fs.readFileSync(blogpostsPath, 'utf8');
const blogpostsArray = JSON.parse(blogpostsJSON);

const readAll = () => {
   const blogposts = JSON.parse(blogpostsJSON);
   return blogposts;
}

const readIndividual = blogpost_id => {
   const filteredBlogPost = blogpostsArray.filter(item => item.id === blogpost_id);
   return filteredBlogPost[0];
};

const create = blogpostData => {
   const newBlogPost = {
       id: uuid(),
       title: blogpostData.title,
       content: blogpostData.content
   };
   blogpostsArray.push(newBlogPost);
   fs.writeFileSync(blogpostsPath, JSON.stringify(blogpostsArray));
   return newBlogPost;
};

const update = (blogpost_id, updates) => {
   let result;
   const updatedBlogposts = blogpostsArray.map(blogpost => {
       if(blogpost.id === blogpost_id){
           result = {...blogpost, ...updates};
           return result;
       } else {
           return blogpost;
       }
   });
   fs.writeFileSync(blogpostsPath, JSON.stringify(updatedBlogposts));
   return result;
};


const destroy = blogpost_id => {
   let result;
   const remainingBlogposts = blogpostsArray.filter(blogpost => {
       if(blogpost.id === blogpost_id) {
           result = blogpost;
       }
       return blogpost.id !== blogpost_id;
   });
   fs.writeFileSync(blogpostsPath, JSON.stringify(remainingBlogposts));
   return result;
};

module.exports = {
   readAll,
   readIndividual,
   create,
   update,
   destroy
};
