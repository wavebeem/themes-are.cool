import React, {Component, PropTypes as PT} from 'react';

class Configurator extends Component {
  render() {
    const {
      primaryColor,
      themeType,
      onChangePrimaryColor,
      onChangeThemeType
    } = this.props;
    return (
      <div>
        <label>
          Color
          <input
            type='text'
            value={primaryColor}
            onChange={onChangePrimaryColor}
          />
        </label>
        <div>
          <label>
            <input
              type='radio'
              name='theme-type'
              value='dark'
              checked={themeType === 'dark'}
              onChange={onChangeThemeType}
            />
            Dark
          </label>
          <label>
            <input
              type='radio'
              name='theme-type'
              value='light'
              checked={themeType === 'light'}
              onChange={onChangeThemeType}
            />
            Light
          </label>
        </div>
      </div>
    );
  }
}

Configurator.propTypes = {
  primaryColor: PT.string,
  themeType: PT.oneOf(['light', 'dark']),
  onChangePrimaryColor: PT.func,
  onChangeThemeType: PT.func,
};

export default Configurator;
