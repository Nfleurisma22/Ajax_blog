
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const blogpostRoutes = require('./routes/blogposts');


app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.send('Welcome to my blog.');
});

app.use('/posts', blogpostRoutes);



app.listen( PORT, () => {
  console.log(`AJAX Blog: Listening on port no. ${PORT}`)
})
