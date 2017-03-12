import React, {Component, PropTypes as PT} from 'react';

class SidebarItem extends Component {
  render() {
    const {index, name, type} = this.props;
    if (type === 'person') {
      return renderPerson(name, index);
    } else if (type === 'channel') {
      return renderChannel(name, index);
    } else {
      throw new Error();
    }
  }
}

SidebarItem.propTypes = {
  index: PT.number,
  name: PT.string,
  type: PT.oneOf(['person', 'channel']),
};

const OFFLINE = '\u25CB';
const ONLINE = '\u25CF';

function renderPerson(person, i) {
  const isOnline = i % 5 <= 2;
  if (isOnline) {
    return <div key={i} className='br2 br--right pv1 hover-bg-white-10 pl3'>{ONLINE} {person}</div>;
  } else {
    return <div key={i} className='br2 br--right pv1 hover-bg-white-10 pl3 o-70 lh-title'>{OFFLINE} {person}</div>;
  }
}

function renderChannel(channel, i) {
  if (i === 3) {
    return <div key={i} className='br2 br--right pv1 pl3 bg-black-10 lh-title'># {channel}</div>;
  } else if (i % 4 === 0) {
    return <div key={i} className='br2 br--right pv1 hover-bg-white-10 pl3 b lh-title'># {channel}</div>;
  } else {
    return <div key={i} className='br2 br--right pv1 hover-bg-white-10 pl3 o-70 lh-title'># {channel}</div>;
  }
}

export default SidebarItem;
