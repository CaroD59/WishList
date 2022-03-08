import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WishStyle from './styles';
import { toast } from 'react-toastify';

export default function Wish() {
  // Fonction pour se rendre à telle page
  let navigate = useNavigate();
  function handleHistory() {
    navigate('/wishlist');
  }

  // Pour afficher
  const [list, setList] = useState('');

  // Pour modifier
  const [text, setText] = useState('');

  // Gestion d'erreur
  const [error, setError] = useState(null);

  // Récupère l'id
  const { idlist } = useParams();

  // Pour afficher le souhait
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/wishlist/${idlist}`)
      .then(({ data }) => {
        setList(data);
      })
      .catch(() => {
        setError('BROKEN !!');
      });
  }, []);

  // Gestion d'erreur
  if (error) {
    return <p>Broken... please try again later.</p>;
  }

  if (!list) {
    return <p>Searching, it could take a while...</p>;
  }

  // Pour modifier le souhait
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
      toast.error(`Veuillez modifier votre souhait.`);
    }
    if (textArea.value) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/wishlist/${idlist}`, dataToSend)
        .then((res) => {
          toast.info(`Votre souhait a bien été modifié`);
          handleHistory();
          console.log('Wish updated !', res);
        })
        .catch((err) => {
          console.log('Error updating the wish, sorry... !', err);
        });
    }
  };

  return (
    <WishStyle>
      {/* Pour afficher le souhait selon la BDD et surtout l'ID */}
      <h1>{list[0].text}</h1>

      <form className='Bloc-Insert-Wish'>
        <textarea
          name='wishlist'
          id='wishlist'
          placeholder='Modifier votre souhait ici...'
          // Détecte le changement dans le textarea, quand l'utilisateur tape quelque chose
          onChange={handleChangeContent}
        ></textarea>
        <div className='buttons'>
          <div>
            {/* Lien vers une page */}
            <Link to='/wishlist'>
              <button className='button-return'>
                <img src='/img/return.png' alt='edit' class='btn' />
              </button>
            </Link>
          </div>
          <div>
            {/* Confirme la fonction qui permet de modifier le souhait */}
            <button onClick={handleSubmit} className='button-add'>
              <img src='/img/edit.png' alt='edit' class='btn' />
            </button>
          </div>
        </div>
      </form>
    </WishStyle>
  );
}
