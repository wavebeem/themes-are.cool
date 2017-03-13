import React, {Component} from 'react';
import TinyColor from 'tinycolor2';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

const badgeColor = '#fc6769';
const primaryColor = '#258a4f';
const themeType = 'dark';

class App extends Component {
  constructor() {
    super();
    this.state = {
      badgeColor,
      primaryColor,
      themeType,
      darkerColor: TinyColor(primaryColor).darken(8).toString(),
      lighterColor: TinyColor(primaryColor).lighten(8).toString(),
      foregroundColor: themeType === 'dark' ? '#ffffff' : '#000000',
    };
    this.onChangePrimaryColor = event => {
      const c = TinyColor(event.target.value);
      this.setState({
        primaryColor: c.toString(),
        darkerColor: c.darken(8).toString(),
        lighterColor: c.lighten(8).toString(),
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
          primaryColor={this.state.primaryColor}
          themeType={this.state.themeType}
          lighterColor={this.state.lighterColor}
          darkerColor={this.state.darkerColor}
          foregroundColor={this.state.foregroundColor}
          badgeColor={this.state.badgeColor}
        />
        <Configurator
          primaryColor={this.state.primaryColor}
          themeType={this.state.themeType}
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
