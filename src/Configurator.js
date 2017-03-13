import React, {Component, PropTypes as PT} from 'react';
import TinyColor from 'tinycolor2';

class Configurator extends Component {
  render() {
    const {
      primaryColor,
      themeType,
      onChangePrimaryColor,
      onChangeThemeType
    } = this.props;
    // TODO: Move this state to the app and pass it to the sidebar.
    const badgeColor = '#fc6769';
    const lighterColor = TinyColor(primaryColor).lighten(8).toString();
    const darkerColor = TinyColor(primaryColor).darken(8).toString();
    const foregroundColor = themeType === 'dark' ? '#ffffff' : '#000000';
    const theme = [
      primaryColor, // Column BG
      lighterColor, // Menu BG Hover
      darkerColor, // Active Item
      foregroundColor, // Active Item Text
      lighterColor, // Hover Item
      foregroundColor, // Text Color
      foregroundColor, // Active Presence
      badgeColor, // Mention Badge
    ].join(',');
    const selectAll = event => {
      event.target.focus();
      event.target.select();
    };
    return (
      <div className='flex-auto pb4'>
        <h1 className='bb ph3 pv2 b--black-20 db mt0'>
          Slack Themes are Cool
        </h1>
        <label className='db ph3'>
          <h2 className='ttu b f6 mt0 mb1'>
            Color
          </h2>
          <input
            type='text'
            className='ba b--black-20 br1 pa1 mb3 code'
            onFocus={selectAll}
            value={primaryColor}
            onChange={onChangePrimaryColor}
          />
        </label>
        <div className='db ph3 mb3'>
          <h2 className='db b ttu f6 mv0'>
            Text color
          </h2>
          <label className='db lh-copy'>
            <input
              type='radio'
              name='theme-type'
              value='dark'
              checked={themeType === 'dark'}
              onChange={onChangeThemeType}
            />
            <span className='ml2'>Light text</span>
          </label>
          <label className='db lh-copy'>
            <input
              type='radio'
              name='theme-type'
              value='light'
              checked={themeType === 'light'}
              onChange={onChangeThemeType}
            />
            <span className='ml2'>Dark text</span>
          </label>
        </div>
        <label className='db ph3'>
          <h2 className='b ttu f6 mt0 mb1'>
            Copy and paste this into Slack
          </h2>
          <input
            onFocus={selectAll}
            onChange={() => {}}
            value={theme}
            className='w-100 ba b--black-20 br1 pa1 mb3 code'
          />
        </label>
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
