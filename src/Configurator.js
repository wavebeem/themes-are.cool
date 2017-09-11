import React, {Component, PropTypes as PT} from 'react';
import {ChromePicker} from 'react-color';
import ThemeType from './prop-types/theme';
import Palette from './Palette';

class Configurator extends Component {
  constructor() {
    super();
    this.state = {
      colorPickerOpen: false
    };
    this.onColorPickerChange = this.onColorPickerChange.bind(this);
    this.onColorFocus = this.onColorFocus.bind(this);
    this.onColorBlur = this.onColorBlur.bind(this);
  }
  onColorPickerChange({hex}) {
    const {onChangePrimaryColor} = this.props;
    onChangePrimaryColor({target: {value: hex}})
  }
  onColorFocus() {
    this.setState({colorPickerOpen: true});
  }
  onColorBlur() {
    this.setState({colorPickerOpen: false});
  }
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
    const radioClass = 'ph2 pv1 br2 db lh-copy hover-bg-light-gray';
    const elemHeader = (
      <h1 className='bb pa3 b--light-gray db mt0'>
        Slack Themes are Cool
      </h1>
    );
    const elemPrimaryColor = (
      <label className='db ph3'>
        <h2 className='ttu b f6 mt0 mb1'>
          Color
        </h2>
        <div className='mb3'>
          <ChromePicker
            color={primaryColor}
            disableAlpha={true}
            onChange={this.onColorPickerChange}
          />
        </div>
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
          spellCheck={false}
          className={`
            border-box w-100
            bg-white
            glow
            b--black-20
            bw1
            ba br2
            pa2 mb3
            code
          `}
        />
      </label>
    );
    const elemRadioButtonsText = (
      <div className='db ph3 mb3'>
        <h2 className='db b ttu f6 mv0'>
          Text color
        </h2>
        <label className={radioClass}>
          <input
            type='radio'
            name='theme-type'
            value='dark'
            checked={themeType === 'dark'}
            onChange={onChangeThemeType}
          />
          <span className='ml2'>Light text</span>
        </label>
        <label className={radioClass}>
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
        <label className={radioClass}>
          <input
            type='radio'
            name='badge-type'
            value='red'
            checked={badgeType === 'red'}
            onChange={onChangeBadgeType}
          />
          <span className='ml2'>Red badges</span>
        </label>
        <label className={radioClass}>
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
      <div className='flex-auto pb4 mw8'>
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
