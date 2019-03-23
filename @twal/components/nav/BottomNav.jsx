import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '@twal/styles/base/nav.scss';
class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.PropTypes = {
      links: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
      className: PropTypes.string,
      isDrawer: PropTypes.bool
    };
  }

  toggle() {
    if (!this.props.isDrawer) return;
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    const { links, className } = this.props;
    return (
      <>
        <div className={classnames('bottom-nav', className, { togglenav: this.state.toggle })}>
          <ul>
            {links.map(link => (
              <li key={link.key}>{link}</li>
            ))}
          </ul>
        </div>
        {this.props.isDrawer && (
          <button
            onClick={() => this.toggle()}
            className={classnames('toggle-bottom-nav', { togglenav: this.state.toggle })}
          >
            {this.state.toggle && <span>▲</span>}
            {!this.state.toggle && <span>▼</span>}
          </button>
        )}

        <div className={classnames('main-menu', { togglenav: this.state.toggle })}> </div>
      </>
    );
  }
}

export default BottomNav;
