import React from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

import classnames from 'classnames';

import '@twal/styles/base/nav.scss';

class BottomMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.idleTimer = React.createRef();
  }

  toggle = (value = !this.state.toggle) => {
    if (!this.props.isDrawer) return;
    this.setState({
      toggle: value
    });
  };

  render() {
    const { links, className, timeout, autohide } = this.props;
    const { toggle } = this.state;

    return (
      <IdleTimer
        timeout={timeout * 1000}
        ref={this.idleTimer}
        onIdle={() => autohide && this.toggle(true)}
      >
        <div className={classnames('bottom-nav', className, { togglenav: toggle })}>
          <ul>
            {links.map(link => (
              <li key={link.key}>{link}</li>
            ))}
          </ul>
        </div>
        {this.props.isDrawer && (
          <button
            onClick={() => this.toggle()}
            className={classnames('toggle-bottom-nav', { togglenav: toggle })}
          >
            <span>{toggle ? '▲' : '▼'}</span>
          </button>
        )}

        <div className={classnames('main-menu', { togglenav: toggle })}> </div>
      </IdleTimer>
    );
  }
}

BottomMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  className: PropTypes.string,
  isDrawer: PropTypes.bool,
  autohide: PropTypes.bool,
  timeout: PropTypes.number
};

BottomMenu.defaultProps = {
  isDrawer: true,
  timeout: 10
};

export default BottomMenu;
