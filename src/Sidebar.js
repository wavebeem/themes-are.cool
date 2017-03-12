import React, {Component, PropTypes as PT} from 'react';
import SidebarItem from './SidebarItem';

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
  'Francis Kelbier',
  'Criax Hansol',
  'Gavyn Qorbin',
  'Yras Tong',
  'Lilly Ellison',
  'Corana Kavos',
  'Von Wran',
  'Zyyacah Lionne',
  'Yulia Lin',
  'Brenna Anarth',
  'Garrallach Sayall',
  'Verdian Tynblade',
  'Acantha Grupen',
  'Opuurin Osh',
  'Mal Aldrecht',
  'Alluria Creel',
  'Lara Wan',
  'Jaryn Malfoy',
  'Aayla Anin',
  'Maison Durrun',
  'Broc Archer',
  'Grooda Golladio',
  'Terek Roosh',
  'Aalya Angavel',
  'Dar Groman',
  'Quin Helkosh',
  'Erisi Kaartinen',
  'Elgun Jekurra',
  'Iyel Noth',
  'Ebeda Ving',
  'Dei Starwind',
  'Wodi Dysar',
  'Yuno Jinn',
  'Jaina Tuain',
  'Seit Win-Dell',
  'Leran Morituri',
  'Maila Midosea',
  'Vania Kelemann',
  'Shivas Endivain',
];

class Sidebar extends Component {
  render() {
    const {primaryColor, themeType} = this.props;
    const style = {
      background: primaryColor,
      color: themeType === 'dark' ? 'white' : 'black'
    };
    const channels = CHANNELS.map((c, i) =>
      <SidebarItem type='channel' index={i} name={c}/>
    );
    const people = NAMES.map((p, i) =>
      <SidebarItem type='person' index={i} name={p}/>
    );
    return (
      <div style={style} className='min-h-100 pt3 pr3 pb3'>
        <div className='o-70 f6 pl3 mb2 ttu'>Channels</div>
        {channels}
        <div className='o-70 f6 pl3 mb2 ttu mt4'>Direct Messages</div>
        {people}
      </div>
    );
  }
}

Sidebar.propTypes = {
  primaryColor: PT.string,
  themeType: PT.oneOf(['light', 'dark']),
};

export default Sidebar;
