import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WishListStyled from './styles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
export default function WishList() {
  // Fonction pour rafraîchir la page après 6,5 secondes
  function Refresh() {
    setTimeout('location.reload(true);', 6500);
  }

  // Pour afficher la liste selon la BDD
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/wishlist`).then(({ data }) => {
      setWishlist(data);
    });
  }, []);

  // Pour ajouter un souhait
  const [text, setText] = useState('');

  const handleChangeContent = (evt) => {
    setText(evt.target.value);
  };

  const textArea = document.getElementById('wishlist');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      text,
    };
    if (!textArea.value) {
      toast.error(`Veuillez écrire votre souhait.`);
    }
    if (textArea.value) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/wishlist`, dataToSend)
        .then((res) => {
          console.log('Wish added !', res);
          toast.success(`Votre souhait a bien été ajouté.`);
          Refresh();
        })
        .catch((err) => {
          console.log('Error adding the wish, sorry... !', err);
        });
    }
  };

  // Pour supprimer un souhait

  const wishDelete = (idlist, evt) => {
    evt.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/wishlist/${idlist}`)
      .then((res) => {
        console.log('Wish deleted !', res);
        toast.success(`Votre souhait a bien été supprimé.`);
        Refresh();
      })
      .catch((err) => console.log(err));
  };
  return (
    <WishListStyled>
      <h1>My Wishlist</h1>
      {/* Pour afficher la liste selon la BDD */}
      {wishlist.length === 0 ? (
        <div className='NoWish'>
          <p>Vous n'avez pas encore de souhait...</p>
        </div>
      ) : (
        <div>
          {wishlist.map((list, index) => {
            return (
              <div className='List' key={index}>
                <div className='wish'>
                  <p>{list.text}</p>
                </div>
                <div className='buttons'>
                  <div>
                    {/* Supprime le souhait avec l'id adéquat */}
                    <button
                      onClick={(evt) => wishDelete(list.idlist, evt)}
                      className='delete'
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                  <div>
                    {/* Route vers l'id du souhait pour l'éditer*/}
                    <Link to={`/wishlist/${list.idlist}`}>
                      <button className='edit'>
                        <GrEdit />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <form className='Bloc-Insert-Wish'>
        <textarea
          name='wishlist'
          id='wishlist'
          value={text}
          // Détecte le changement dans le textarea pour le stocker dans la constante
          onChange={handleChangeContent}
          placeholder='Écrivez votre souhait ici...'
          required
        ></textarea>
        {/* Envoyer dans la BDD ce qu'il a détecté dans le textarea */}
        <button type='submit' onClick={handleSubmit} className='add'>
          +
        </button>
      </form>
    </WishListStyled>
  );
}
