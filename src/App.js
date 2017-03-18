import React, {Component} from 'react';
import TinyColor from 'tinycolor2';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

const badgeType = 'red';
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
  computedColors(color) {
    return {
      darkerColor: this.darken(color, 10),
      darkestColor: this.darken(color, 50),
      lighterColor: this.lighten(color, 5),
      lightestColor: this.lighten(color, 10),
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
    Object.assign(this.state, this.computedColors(primaryColor));

    this.onChangePrimaryColor = event => {
      const color = event.target.value;
      const update = {
        primaryColor: TinyColor(color).toHexString(),
        themeType: this.preferredThemeTypeFor(color),
      };
      Object.assign(update, this.computedColors(color))
      this.setState(update);
    };

    this.onChangeThemeType = event => {
      const themeType = event.target.value;
      this.setState({
        themeType,
        foregroundColor: themeType === 'dark' ? '#ffffff' : '#000000',
      });
    };

    this.onChangeBadgeType = event => {
      this.setState({
        badgeType: event.target.value
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
