const express = require('express');
const mainRouter = require('./routes/index');
const path = require('path')

const app = express();
const port = 8080;
const server = app.listen(port, () =>
    console.log('Server running at', port)
);
server.on('error', (err) => {
    console.log('Error catched', err);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', mainRouter); 

const publicPath = path.resolve(__dirname,'../public');
console.log(publicPath);

app.use(express.static(publicPath));