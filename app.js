const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/product', (req, res) => {
	res.send([
		{
			product_id: 1,
			product_name: 'Laptop',
		},
		{
			product_id: 2,
			product_name: 'Mobile',
		},
	]);
});

app.get('/', (req, res) => {
	res.send('<h1>Hello from express');
});

const PORT = 5000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
	console.log(`App is ruuning on port 5000`);
});
