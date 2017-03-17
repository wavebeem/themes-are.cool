import React, {Component, PropTypes as PT} from 'react';
import MC from 'material-colors';
import C from 'classnames';

class Palette extends Component {
  colors() {
    const weights = ['100', '200', '500', '800'];
    const colors = [
      'red',
      'pink',
      'purple',
      'deepPurple',
      'indigo',
      'blue',
      'lightBlue',
      'cyan',
      'teal',
      'green',
      'lightGreen',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deepOrange',
      'brown',
      'grey',
      'blueGrey',
      // 'darkText',
      // 'lightText',
      // 'darkIcons',
      // 'lightIcons',
    ];
    return colors.map(c => weights.map(w => MC[c][w]))
      .reduce((a, b) => [...a, ...b], []);
  }
  buttons() {
    const {onChangePrimaryColor, themeType} = this.props;
    return this.colors().map((c, i) => {
      const f = () => {
        onChangePrimaryColor({target: {value: c}});
      };
      const className = C(
        themeType === 'dark' ? 'white' : 'black',
        // 'ba bw1 b--black br1',
        'bn',
        'code ttl',
        'w-100 border-box',
        'pointer',
        'inner-focus'
      );
      const style = {
        height: '30px',
        background: c
      };
      const button = (
        <button
          onClick={f}
          style={style}
          className={className}
        ></button>
      );
      return <div key={i} className='dib w-25'>{button}</div>;
    });
  }
  render() {
    const className = 'mh3 mb3';
    const style = {
      lineHeight: '0',
      maxWidth: '300px'
    };
    return (
      <div
        className={className}
        style={style}
      >{this.buttons()}</div>
    );
  }
}

Palette.propTypes = {
  onChangePrimaryColor: PT.func.isRequired,
  themeType: PT.string.isRequired,
};

export default Palette;
