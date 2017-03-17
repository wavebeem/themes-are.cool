import {PropTypes as PT} from 'react';

const ThemeType = PT.shape({
  badgeType: PT.oneOf(['red', 'themed']).isRequired,
  themeType: PT.oneOf(['light', 'dark']).isRequired,
  primaryColor: PT.string.isRequired,
  darkerColor: PT.string.isRequired,
  darkestColor: PT.string.isRequired,
  lighterColor: PT.string.isRequired,
  lightestColor: PT.string.isRequired,
  foregroundColor: PT.string.isRequired,
});

export default ThemeType;
