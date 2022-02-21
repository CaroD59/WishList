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

  height: 100vh;
  background-image: linear-gradient(
    to top,
    #000000,
    #14030c,
    #1d0718,
    #210d25,
    #1f1235,
    #1d143d,
    #1a1645,
    #12184d,
    #1c144d,
    #250f4c,
    #2d084a,
    #350048
  );

  /* Ceci est du CSS imbriqué */
  h1 {
    text-align: center;
    padding: 50px;
    font-family: 'Honey';
    font-size: 50px;
    color: white;
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
        color: white;
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
        background-color: transparent;
        color: white;
      }
      .delete:hover {
        color: red;
      }
    }
  }
  .NoWish {
    font-family: 'Letters';
    font-size: 20px;
    text-align: center;
    margin-top: 150px;
    color: #cecba8;
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
      outline: none;
      -webkit-box-shadow: 0px 0px 16px 7px rgba(255, 241, 186, 0.99);
      box-shadow: 0px 0px 16px 7px rgba(255, 241, 186, 0.99);
      border: 1px solid yellow;
      background-color: #ececd7;
      color: #460d46;
    }
    button {
      border: none;
      margin: 50px;
      font-size: 20px;
      cursor: pointer;
    }
    .add {
      width: 5vw;
      height: 5vh;
      margin-left: auto;
      margin-right: auto;
      border-radius: 30px;
      border: 10px solid #ececd7;
      color: #060631;
    }
    .add:hover {
      background-color: #220122;
      border: 10px solid black;
      color: white;
      transition: 1.5s;
    }
  }
`;

export default WishListStyled;
