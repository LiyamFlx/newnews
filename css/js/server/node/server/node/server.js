const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Dummy data and recommendation function for the example
const articles = [
  { id: 1, title: 'Article 1', summary: 'Summary 1', image: 'article1.jpg' },
  { id: 2, title: 'Article 2', summary: 'Summary 2', image: 'article2.jpg' },
  // Add more articles as needed
];

function recommendArticles(userData) {
  // Implement your recommendation logic here
  // For simplicity, we return all articles in this example
  return articles;
}

app.post('/recommendations', (req, res) => {
  const userData = req.body;
  const recommendations = recommendArticles(userData);
  res.json(recommendations);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
