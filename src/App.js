import React, {Component} from 'react';
import TinyColor from 'tinycolor2';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

const badgeColor = '#fc6769';
const primaryColor = '#4f2f4c';
const themeType = 'dark';

class App extends Component {
  darken(color, amount) {
    return TinyColor(color).darken(amount).toHexString();
  }
  lighten(color, amount) {
    const color2 = TinyColor(color).lighten(amount);
    return TinyColor.mix(color2, 'white', amount).toHexString();
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
      badgeColor,
      primaryColor,
      themeType,
    };
    Object.assign(this.state, this.computedColors(primaryColor));

    this.onChangePrimaryColor = event => {
      const color = event.target.value;
      const update = {
        primaryColor: TinyColor(color).toHexString()
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
  }
  render() {
    return (
      <div className='flex flex-auto min-vh-100'>
        <Sidebar theme={this.state} />
        <Configurator
          theme={this.state}
          onChangePrimaryColor={this.onChangePrimaryColor}
          onChangeThemeType={this.onChangeThemeType}
        />
      </div>
    );
  }
}

export default App;
