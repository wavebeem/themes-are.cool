import React, {Component} from 'react';
import TinyColor from 'tinycolor2';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

const badgeType = 'red';
const badgeColor = '#fc6769';
const primaryColor = '#4f2f4c';
const themeType = 'dark';

// TODO: There's repeated logic in SidebarItem and Configurator, but I'm too
// lazy to fix it right now. Hah.

class App extends Component {
  darken(color, amount) {
    return TinyColor(color).darken(amount).toHexString();
  }
  lighten(color, amount) {
    const color2 = TinyColor(color).lighten(amount);
    return TinyColor.mix(color2, 'white', amount).toHexString();
  }
  preferredThemeTypeFor(color) {
    // 1 means both colors are identical. 21 means maximum contrast.
    const contrast = TinyColor.readability(color, 'white');
    return contrast < 3 ? 'light' : 'dark';
  }
  badgeColor() {
    return this.state.badgeType === 'red'
      ? badgeColor
      : this.darkestColor();
  }
  hoverColor() {
    return this.state.themeType === 'dark'
      ? this.lighterColor()
      : this.darkerColor();
  }
  activeColor() {
    return this.state.themeType === 'dark'
      ? this.lightestColor()
      : this.darkestColor();
  }
  activeTextColor() {
    return '#ffffff';
  }
  darkerColor() {
    return this.darken(this.state.primaryColor, 10);
  }
  darkestColor() {
    return this.darken(this.state.primaryColor, 50);
  }
  lighterColor() {
    return this.lighten(this.state.primaryColor, 5);
  }
  lightestColor() {
    return this.lighten(this.state.primaryColor, 10);
  }
  computedColors() {
    const {themeType} = this.state;
    return {
      darkerColor: this.darkerColor(),
      darkestColor: this.darkestColor(),
      lighterColor: this.lighterColor(),
      lightestColor: this.lightestColor(),
      activeTextColor: this.activeTextColor(),
      activeColor: this.activeColor(),
      hoverColor: this.hoverColor(),
      badgeColor: this.badgeColor(),
      foregroundColor: themeType === 'dark' ? '#ffffff' : '#000000',
    };
  }
  constructor() {
    super();
    this.state = {
      badgeType,
      primaryColor,
      themeType,
    };
    Object.assign(this.state, this.computedColors());

    this.onChangePrimaryColor = event => {
      const color = event.target.value;
      this.setState({
        primaryColor: TinyColor(color).toHexString(),
        themeType: this.preferredThemeTypeFor(color),
      }, () => {
        this.setState(this.computedColors());
      });
    };

    this.onChangeThemeType = event => {
      const themeType = event.target.value;
      this.setState({
        themeType,
        foregroundColor: themeType === 'dark' ? '#ffffff' : '#000000',
      }, () => {
        this.setState(this.computedColors());
      });
    };

    this.onChangeBadgeType = event => {
      this.setState({
        badgeType: event.target.value
      }, () => {
        this.setState(this.computedColors());
      });
    }
  }
  render() {
    return (
      <div className='flex flex-auto min-vh-100'>
        <Sidebar theme={this.state} />
        <Configurator
          theme={this.state}
          onChangeBadgeType={this.onChangeBadgeType}
          onChangePrimaryColor={this.onChangePrimaryColor}
          onChangeThemeType={this.onChangeThemeType}
        />
      </div>
    );
  }
}

export default App;
