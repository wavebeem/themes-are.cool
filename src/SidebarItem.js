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

const style = {
  minWidth: '200px',
};

function renderPerson(person, i) {
  const isOnline = i % 5 <= 2;
  if (isOnline) {
    return (
      <div
        style={style}
        key={i}
        className='pointer br2 br--right pv1 hover-bg-white-20 o-70 pl3'
      >{ONLINE} {person}</div>
    );
  } else {
    return (
      <div
        style={style}
        key={i}
        className='pointer br2 br--right pv1 hover-bg-white-20 pl3 o-70'
      >{OFFLINE} {person}</div>
    );
  }
}

function renderChannel(channel, i) {
  if (i === 3) {
    return (
      <div
        style={style}
        key={i}
        className='pointer br2 br--right pv1 pl3 bg-black-20'
      ># {channel}</div>
    );
  } else if (i % 4 === 0) {
    return (
        <div
        style={style}
        key={i}
        className='pointer br2 br--right pv1 hover-bg-white-20 pl3'
      ># <b>{channel}</b></div>
    );
  } else if (i % 6 === 0) {
    return (
        <div
        style={style}
        key={i}
        className='pointer br2 br--right pv1 hover-bg-white-20 pl3 flex'
      >
        <div className='flex-auto'># <b>{channel}</b></div>
        <div
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
            minWidth: '30px',
            background: '#eb4d5c'
          }}
          className='normal tc br-pill white mr1'
        >3</div>
      </div>
    );
  } else {
    return (
        <div
        style={style}
        key={i}
        className='pointer br2 br--right pv1 hover-bg-white-20 pl3 o-70'
      ># {channel}</div>
    );
  }
}

export default SidebarItem;
