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
      <div className='flex-auto pb4'>
        <h1 className='bb ph3 pv2 b--black-20 db mt0'>Slack Themes are Cool</h1>
        <label className='db ph3'>
          <div className='ttu b mb1'>Color</div>
          <input
            type='text'
            className='ba b--black-20 br1 pa1 mb3'
            value={primaryColor}
            onChange={onChangePrimaryColor}
          />
        </label>
        <div className='db ph3'>
          <label className='db lh-copy'>
            <input
              type='radio'
              name='theme-type'
              value='dark'
              checked={themeType === 'dark'}
              onChange={onChangeThemeType}
            />
            <span className='ml2'>Dark background</span>
          </label>
          <label className='db lh-copy'>
            <input
              type='radio'
              name='theme-type'
              value='light'
              checked={themeType === 'light'}
              onChange={onChangeThemeType}
            />
            <span className='ml2'>Light background</span>
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
