const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const blogpostRoutes = require('./routes/blogposts');
app.use(cors());
app.use(morgan('combined'));
app.use(express.json()); // Body parser!
app.use(express.urlencoded({extended: true}));
app.get('/', (request, response) => {
    response.send('Welcome to my Blog site!!');
});
app.use('/blogposts', blogpostRoutes);
app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(500).send("Internal server error");
});
app.use((request, response, next) => {
    response.status(404).send('Not found.');
});
app.listen(PORT, () => {
    console.log(`Ajax BLOG: Listening on port no. ${PORT}`);
});
