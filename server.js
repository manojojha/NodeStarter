const express = require('express');

const app = express();

app.get('/',(req, res) => {
	
	res.json({'hi':'there'});
})

app.listen(5000);