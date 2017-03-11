import React, {Component, PropTypes as PT} from 'react';

const CHANNELS = [
  'general',
  'video-games',
  'running',
  'archery',
  'build',
  'qa',
  'frontend',
  'backend',
  'random',
  'announcements',
];

const NAMES = [
  'Jarbo Smuth',
  'Vena Rynax',
  'Oshley Glasher',
  'Bran Bo',
  'Grib McRoy',
];

const OFFLINE = '\u25CB';
const ONLINE = '\u25CF';

class Sidebar extends Component {
  render() {
    const {primaryColor, themeType} = this.props;
    const style = {
      background: primaryColor,
      color: themeType === 'dark' ? 'white' : 'black'
    };
    return (
      <div style={style} className='min-h-100'>
        <div className='ttu'>Channels</div>
        {CHANNELS.map(channel => <div># {channel}</div>)}
        <div className='ttu'>Direct Messages</div>
        {NAMES.map(name => <div>{ONLINE} {name}</div>)}
      </div>
    );
  }
}

Sidebar.propTypes = {
  primaryColor: PT.string,
  themeType: PT.oneOf(['light', 'dark']),
};

export default Sidebar;
