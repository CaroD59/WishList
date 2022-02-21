import styled from 'styled-components';

const WishStyled = styled.div`
  @font-face {
    font-family: 'Letters';
    src: local('letters'), url('/fonts/letters.otf') format('opentype');
  }

  /* Ceci est du CSS imbriqué */
  h1 {
    text-align: center;
    margin: 50px;
    font-family: 'Honey';
    font-size: 50px;
  }
  .Bloc-Insert-Wish {
    display: flex;
    flex-direction: column;
    #wishlist {
      margin-top: 100px;
      resize: none;
      width: 90%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      height: 20vh;
      border-radius: 20px;
      font-family: cursive;
      width: 50%;
    }
    .buttons {
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      .button-add {
        border: none;
        font-size: 20px;
        cursor: pointer;
      }
      .button-add:hover {
        color: blue;
      }
    }
    .button-return {
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export default WishStyled;
