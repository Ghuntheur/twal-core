import React from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

class Scrollable extends React.PureComponent {
  state = {
    fullyScrolled: false
  };

  style = {
    height: 500,
    overflow: 'auto'
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
      <SimpleBar
        onScroll={this.handleScroll}
        style={{ ...this.style, background: fullyScrolled ? 'blue' : 'red' }}
        {...rest}
      >
        {children}
      </SimpleBar>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node
};

export default Scrollable;
