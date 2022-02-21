import styled from 'styled-components';

const WishStyled = styled.div`
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
    color: white;
    text-align: center;
    padding: 50px;
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
      outline: none;
      -webkit-box-shadow: 0px 0px 16px 7px rgba(255, 241, 186, 0.99);
      box-shadow: 0px 0px 16px 7px rgba(255, 241, 186, 0.99);
      border: 1px solid yellow;
      background-color: #ececd7;
      color: #460d46;
    }
    .buttons {
      margin-top: 30px;
      display: flex;
      justify-content: space-around;

      .button-add,
      .button-return {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }
      .button-add {
        color: white;
      }
    }
  }
`;

export default WishStyled;
