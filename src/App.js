import React, {Component} from 'react';
import TinyColor from 'tinycolor2';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

const badgeColor = '#fc6769';
const primaryColor = '#4f2f4c';
const themeType = 'dark';

class App extends Component {
  constructor() {
    super();
    const c = TinyColor(primaryColor);
    this.state = {
      badgeColor,
      primaryColor,
      themeType,
      darkerColor: TinyColor.mix(c, 'black', 15).toHexString(),
      darkestColor: TinyColor.mix(c, 'black', 30).toHexString(),
      lighterColor: TinyColor.mix(c, 'white', 15).toHexString(),
      lightestColor: TinyColor.mix(c, 'white', 30).toHexString(),
      foregroundColor: themeType === 'dark' ? '#ffffff' : '#000000',
    };
    this.onChangePrimaryColor = event => {
      const c = TinyColor(event.target.value);
      this.setState({
        primaryColor: c.toHexString(),
        darkerColor: TinyColor.mix(c, 'black', 15).toHexString(),
        darkestColor: TinyColor.mix(c, 'black', 30).toHexString(),
        lighterColor: TinyColor.mix(c, 'white', 15).toHexString(),
        lightestColor: TinyColor.mix(c, 'white', 30).toHexString(),
      });
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
