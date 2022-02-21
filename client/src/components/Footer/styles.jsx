import styled from 'styled-components';

const FooterStyled = styled.div`
  @font-face {
    font-family: 'Harley';
    src: local('harley'), url('/fonts/harley.ttf') format('truetype');
  }

  /* Ceci est du CSS imbriqué */

  font-family: 'Harley';
  font-size: 30px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default FooterStyled;
