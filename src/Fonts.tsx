import { Global } from '@emotion/react';

const Fonts: React.FC = () => (
  <Global styles={`
  @font-face {
    font-family: 'Apple Chancery';
    font-style: normal;
    src: url('./assets/AppleChancery.ttf') format('truetype');
  }
  `} />
);

export default Fonts;