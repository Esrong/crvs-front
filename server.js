const express = require('express');
const app = express();
app.use(express.static('./dist/nazox'));
app.get('/*', function (req, res) {
res.sendFile(__dirname + '/dist/nazox/index.html');
});
app.listen(process.env.PORT || 8080);