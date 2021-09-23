const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 

const app = express();
const path = require("path");

app.use(cors())
// create express app

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src/public")));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// import employee routes
const userRoutes = require('./src/routes/user.route');
const adminRoutes = require('./src/routes/admin.route');
const contentRoutes = require('./src/routes/content.route');
// create employee routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/content', contentRoutes);

// listen to the port
app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});