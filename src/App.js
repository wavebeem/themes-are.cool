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
    this.state = {
      badgeColor,
      primaryColor,
      themeType,
      darkerColor: TinyColor(primaryColor).darken(8).toHexString(),
      lighterColor: TinyColor(primaryColor).lighten(8).toHexString(),
      foregroundColor: themeType === 'dark' ? '#ffffff' : '#000000',
    };
    this.onChangePrimaryColor = event => {
      const c = TinyColor(event.target.value);
      this.setState({
        primaryColor: c.toHexString(),
        darkerColor: c.clone().darken(8).toHexString(),
        lighterColor: c.clone().lighten(8).toHexString(),
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
        <Sidebar
          themeType={this.state.themeType}
          primaryColor={this.state.primaryColor}
          lighterColor={this.state.lighterColor}
          darkerColor={this.state.darkerColor}
          foregroundColor={this.state.foregroundColor}
          badgeColor={this.state.badgeColor}
        />
        <Configurator
          themeType={this.state.themeType}
          primaryColor={this.state.primaryColor}
          lighterColor={this.state.lighterColor}
          darkerColor={this.state.darkerColor}
          foregroundColor={this.state.foregroundColor}
          badgeColor={this.state.badgeColor}
          onChangePrimaryColor={this.onChangePrimaryColor}
          onChangeThemeType={this.onChangeThemeType}
        />
      </div>
    );
  }
}

export default App;
