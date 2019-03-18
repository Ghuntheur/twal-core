import React from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import '@twal/styles/base/layout.scss';

class Scrollable extends React.PureComponent {
  state = {
    fullyScrolled: false
  };

  handleScroll = ev => {
    const elm = ev.target;
    const scrollTop = elm.scrollTop;
    const scrollHeight = elm.scrollHeight;
    const offsetHeight = elm.offsetHeight;

    this.setState({ fullyScrolled: scrollTop >= scrollHeight - offsetHeight });
  };

  render() {
    const { children, ...rest } = this.props;
    const { fullyScrolled } = this.state;
    return (
      <SimpleBar onScroll={this.handleScroll} {...rest}>
        {children}
        {!fullyScrolled && <div className="gradient-overlay" />}
      </SimpleBar>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node
};

export default Scrollable;
