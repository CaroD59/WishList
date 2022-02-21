const express = require('express');
const cors = require('cors');
const { backPort } = require('./config');

// Création des routes

const app = express();
const wishlistRoute = require('./routes/wishlist');

app.use(express.json());
app.use(cors());
app.use('/wishlist', wishlistRoute);

// Si le port n'est pas trouvé, afficher un message d'erreur

app.use((req, res) => {
  const msg = `Sorry, page not found : ${req.url}`;
  console.warn(msg);
  res.status(404).send(msg);
});

// Port où sera lu le back-end

app.listen(backPort, () => {
  console.log(`API root available at: http://localhost:${backPort}/`);
});
