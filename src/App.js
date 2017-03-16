import React, {Component} from 'react';
import TinyColor from 'tinycolor2';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

const badgeColor = '#fc6769';
const primaryColor = '#4f2f4c';
const themeType = 'dark';

class App extends Component {
  computedColors(color) {
    const c = TinyColor(color);
    return {
      darkerColor: c.clone().darken(10).toHexString(),
      darkestColor: c.clone().darken(30).toHexString(),
      lighterColor: TinyColor.mix(c, 'white', 15).toHexString(),
      lightestColor: TinyColor.mix(c.clone().lighten(15), 'white', 55).toHexString(),
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
      const c = TinyColor(event.target.value);
      const update = {
        primaryColor: c.toHexString()
      };
      Object.assign(update, this.computedColors(c))
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
