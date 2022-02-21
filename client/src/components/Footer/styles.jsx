import styled from 'styled-components';

const FooterStyled = styled.div`
  @font-face {
    font-family: 'Harley';
    src: local('harley'), url('/fonts/harley.ttf') format('truetype');
  }

  /* Ceci est du CSS imbriqué */
  padding-bottom: 30px;
  font-family: 'Harley';
  font-size: 30px;
  text-align: center;
  background-color: #090947;
  color: white;
  width: 100%;
`;

export default FooterStyled;
