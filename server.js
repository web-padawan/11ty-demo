const express = require('express');
const app = express();

app.use(express.static('dist'));

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('The server is listening on port ' + listener.address().port);
});
