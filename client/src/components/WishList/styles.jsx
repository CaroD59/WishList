import styled from 'styled-components';

const WishListStyled = styled.div`
  @font-face {
    font-family: 'Honey';
    src: local('honey'), url('/fonts/honey.otf') format('opentype');
  }

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

  .List {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    .wish {
      width: 50%;
      display: table;
      p {
        font-family: 'Letters';
        font-size: 20px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        margin: 10px;
      }
    }
    .buttons {
      width: 50%;
      display: flex;
      justify-content: space-around;
      margin: 10px;
      button {
        font-size: 20px;
        cursor: pointer;
        border: none;
      }
      .delete:hover {
        color: red;
      }
      a {
        color: yellow;
      }
    }
  }
  .NoWish {
    font-family: 'Letters';
    font-size: 20px;
    text-align: center;
    margin-top: 150px;
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
    button {
      border: none;
      margin: 50px;
      font-size: 20px;
      cursor: pointer;
    }
    .add {
      width: 5%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default WishListStyled;
