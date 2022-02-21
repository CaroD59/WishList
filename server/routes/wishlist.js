const express = require('express');

const router = express.Router();
const { db } = require('../config');

// Afficher la liste complète

router.get('/', async (req, res) => {
  const sql = 'SELECT idlist, text FROM list';
  const [results] = await db.query(sql);
  res.json(results);
});

// Afficher par souhait

router.get('/:idlist', async (req, res) => {
  try {
    const { idlist } = req.params;
    const [wish] = await db.query(
      'SELECT idlist, text FROM list WHERE idlist = ?',
      [idlist]
    );
    if (wish.length) {
      res.status(200).json(wish);
    } else {
      res.status(404).send('Wish not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving the wish');
  }
});

// Poster un nouveau souhait

router.post('/', async (req, res) => {
  try {
    const { idlist, text } = req.body;
    await db.query('INSERT INTO list (idlist, text) VALUES (?, ?)', [
      idlist,
      text,
    ]);
    res.status(201).send('Wish created');
  } catch (err) {
    res.status(500).send('Error creating the wish');
  }
});

// Modifier un souhait

router.put('/:idlist', async (req, res) => {
  try {
    const { idlist } = req.params;
    const wishToUpdate = req.body;
    await db.query('UPDATE list SET ? WHERE idlist = ?', [
      wishToUpdate,
      idlist,
    ]);
    res.status(200).send('Wish successfully updated');
  } catch (err) {
    res.status(500).send('Error updating the wish');
  }
});

// Supprimer un souhait

router.delete('/:idlist', async (req, res) => {
  try {
    const { idlist } = req.params;
    await db.query('DELETE FROM list WHERE idlist = ?', [idlist]);
    res.status(200).send('Wish successfully deleted');
  } catch (err) {
    res.status(500).send('Error deleting the wish');
  }
});

module.exports = router;
