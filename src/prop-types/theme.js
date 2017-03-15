import {PropTypes as PT} from 'react';

const ThemeType = PT.shape({
  badgeColor: PT.string.isRequired,
  primaryColor: PT.string.isRequired,
  themeType: PT.oneOf(['light', 'dark']).isRequired,
  darkerColor: PT.string.isRequired,
  darkestColor: PT.string.isRequired,
  lighterColor: PT.string.isRequired,
  lightestColor: PT.string.isRequired,
  foregroundColor: PT.string.isRequired,
});

export default ThemeType;
