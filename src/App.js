import React, {Component} from 'react';
import Configurator from './Configurator';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      primaryColor: '#258a4f',
      themeType: 'dark'
    };
    this.onChangePrimaryColor = event => {
      this.setState({
        primaryColor: event.target.value
      });
    };
    this.onChangeThemeType = event => {
      this.setState({
        themeType: event.target.value
      });
    };
  }
  render() {
    return (
      <div className='flex flex-auto min-vh-100'>
        <Sidebar
          primaryColor={this.state.primaryColor}
          themeType={this.state.themeType}
        />
        <Configurator
          primaryColor={this.state.primaryColor}
          themeType={this.state.themeType}
          onChangePrimaryColor={this.onChangePrimaryColor}
          onChangeThemeType={this.onChangeThemeType}
        />
      </div>
    );
  }
}

export default App;
