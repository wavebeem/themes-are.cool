import React, {Component, PropTypes as PT} from 'react';
import ThemeType from './prop-types/theme';
import Palette from './Palette';

class Configurator extends Component {
  render() {
    const {
      theme,
      onChangeBadgeType,
      onChangePrimaryColor,
      onChangeThemeType
    } = this.props;
    const {
        primaryColor,
        foregroundColor,
        badgeType,
        themeType,
        hoverColor,
        activeColor,
        activeTextColor,
        badgeColor,
    } = theme;
    const slackTheme = [
      primaryColor, // Column BG
      hoverColor, // Menu BG Hover
      activeColor, // Active Item
      activeTextColor, // Active Item Text
      hoverColor, // Hover Item
      foregroundColor, // Text Color
      foregroundColor, // Active Presence
      badgeColor, // Mention Badge
    ].join(',');
    const selectAll = event => {
      event.target.focus();
      event.target.select();
    };
    const elemHeader = (
        <h1 className='bb ph3 pv2 b--black-20 db mt0'>
          Slack Themes are Cool
        </h1>
    );
    const elemPrimaryColor = (
      <label className='db ph3'>
        <h2 className='ttu b f6 mt0 mb1'>
          Color
        </h2>
        <input
          type='text'
          className='ba b--black-20 br1 pa1 mb3 code'
          onFocus={selectAll}
          defaultValue={primaryColor}
          onChange={onChangePrimaryColor}
        />
      </label>
    );
    const elemTheme = (
      <label className='db ph3'>
        <h2 className='b ttu f6 mt0 mb1'>
          Copy and paste this into Slack
        </h2>
        <input
          onFocus={selectAll}
          onChange={() => {}}
          value={slackTheme}
          className='border-box w-100 ba b--black-20 br1 pa1 mb3 code'
        />
      </label>
    );
    const elemRadioButtonsText = (
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
    );
    const elemRadioButtonsBadge = (
      <div className='db ph3 mb3'>
        <h2 className='db b ttu f6 mv0'>
          Badge color
        </h2>
        <label className='db lh-copy'>
          <input
            type='radio'
            name='badge-type'
            value='red'
            checked={badgeType === 'red'}
            onChange={onChangeBadgeType}
          />
          <span className='ml2'>Red badges</span>
        </label>
        <label className='db lh-copy'>
          <input
            type='radio'
            name='badge-type'
            value='themed'
            checked={badgeType === 'themed'}
            onChange={onChangeBadgeType}
          />
          <span className='ml2'>Dark badges</span>
        </label>
      </div>
    );
    const elemPalette = (
      <Palette
        themeType={themeType}
        onChangePrimaryColor={onChangePrimaryColor}
      />
    );
    return (
      <div className='flex-auto pb4'>
        {elemHeader}
        <div className='flex'>
          <div>
            {elemPalette}
          </div>
          <div className='flex-auto'>
            {elemPrimaryColor}
            {elemRadioButtonsText}
            {elemRadioButtonsBadge}
            {elemTheme}
          </div>
        </div>
      </div>
    );
  }
}

Configurator.propTypes = {
  theme: ThemeType.isRequired,
  onChangeBadgeType: PT.func.isRequired,
  onChangePrimaryColor: PT.func.isRequired,
  onChangeThemeType: PT.func.isRequired,
};

export default Configurator;
