const express = require('express');
var cors = require('cors')
const app = express();
var path = require('path');

app.use(cors())

const calculatorActionsRouter = require('./routes/calculator_actions');
const pagesRouter = require('./routes/pages');

app.use('/calculator_actions', calculatorActionsRouter);
app.use('/', pagesRouter);
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen( port, () => console.log(`App listening on port ${port}!`) )
