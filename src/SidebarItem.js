import React, {Component, PropTypes as PT} from 'react';
import C from 'classnames';
import ThemeType from './prop-types/theme';

const OFFLINE = '\u25CB';
const ONLINE = '\u25CF';

const badgeColor = '#fc6769';

class SidebarItem extends Component {
  constructor() {
    super();
    this.state = {isHovered: false};
    this.onMouseEnter = () => { this.setState({isHovered: true}); };
    this.onMouseLeave = () => { this.setState({isHovered: false}); };
  }
  badgeColor() {
    const {
      darkestColor,
      badgeType,
    } = this.props.theme;
    return badgeType === 'red' ? badgeColor : darkestColor;
  }
  selectedColor() {
    const {
      themeType,
      lightestColor,
      darkestColor,
    } = this.props.theme;
    return themeType === 'dark' ? lightestColor : darkestColor;
  }
  selectedTextColor() {
    return '#ffffff';
  }
  hoverColor() {
    const {
      themeType,
      lighterColor,
      darkerColor,
    } = this.props.theme;
    return themeType === 'dark' ? lighterColor : darkerColor;
  }
  renderPerson(person, i) {
    const {isHovered} = this.state;
    const isOnline = i % 5 <= 2;
    const icon = isOnline ? ONLINE : OFFLINE;
    const className = C(
      'pointer',
      'br2 br--right',
      'pv1 pl3',
      'o-70'
    );
    const style = {
      background: isHovered ? this.hoverColor() : null,
      width: '200px',
    };
    return (
      <div
        style={style}
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >{icon} {person}</div>
    );
  }
  renderChannel(channel, i) {
    const {isHovered} = this.state;
    const className = C(
      'pointer',
      'br2 br--right',
      'pv1 pl3',
      'flex',
    );
    const style = {
      background:
        i === 3 ? this.selectedColor() :
        isHovered ? this.hoverColor() :
        null,
      color: i === 3 ? this.selectedTextColor() : null,
      opacity: (i === 3 || i % 4 === 0 || i % 6 === 0)
        ? null
        : '0.7',
      width: '200px',
    };
    const badge = (
      <div
        style={{
          textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
          minWidth: '30px',
          background: this.badgeColor()
        }}
        className='normal tc br-pill white mr1'
      >3</div>
    );
    const channelElem = i % 4 === 0 || i % 6 === 0
      ? <b className='fw6'># {channel}</b>
      : `# ${channel}`;
    return (
      <div
        style={style}
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className='flex-auto'>{channelElem}</div>
        {i % 6 === 0 ? badge : null}
      </div>
    );
  }
  render() {
    const {index, name, type} = this.props;
    if (type === 'person') {
      return this.renderPerson(name, index);
    } else if (type === 'channel') {
      return this.renderChannel(name, index);
    } else {
      throw new Error();
    }
  }
}

SidebarItem.propTypes = {
  index: PT.number.isRequired,
  name: PT.string.isRequired,
  type: PT.oneOf(['person', 'channel']).isRequired,
  theme: ThemeType.isRequired,
};

export default SidebarItem;
