import React, {Component} from 'react';
import SidebarItem from './SidebarItem';
import ThemeType from './prop-types/theme';

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
  'Shanna Adras',
  'Xel Madine',
  'Auros Green',
  'Makon Covell',
  'Robert Driet',
  'Saubio Tobian',
  'Candurous Marr',
  'Surro Starr',
  'Rayf Mantisa',
  'Gallegher Lerann',
  'Eida Zainab',
];

class Sidebar extends Component {
  render() {
    const {theme} = this.props;
    const {primaryColor, themeType} = theme;
    const style = {
      background: primaryColor,
      color: themeType === 'dark' ? 'white' : 'black'
    };
    const channels = CHANNELS.map((c, i) =>
      <SidebarItem
        theme={theme}
        type='channel'
        key={i}
        index={i}
        name={c}
      />
    );
    const people = NAMES.map((p, i) =>
      <SidebarItem
        theme={theme}
        type='person'
        key={i}
        index={i}
        name={p}
      />
    );
    return (
      <div style={style} className='min-h-100 pt3 pr3 pb3 fw2'>
        <div className='o-70 f6 pl3 mb2 ttu'>Channels</div>
        {channels}
        <div className='o-70 f6 pl3 mb2 ttu mt4'>Direct Messages</div>
        {people}
      </div>
    );
  }
}

Sidebar.propTypes = {
  theme: ThemeType.isRequired,
};

export default Sidebar;
