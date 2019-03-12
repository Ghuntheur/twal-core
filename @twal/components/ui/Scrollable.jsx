import React from 'react';

import PropTypes from 'prop-types';

class Scrollable extends React.PureComponent {
  state = {
    fullyScrolled: false
  };

  style = {
    height: 500,
    overflow: 'auto'
  };

  element = null;

  handleScroll = () => {
    const scrollTop = this.element.scrollTop;
    const scrollHeight = this.element.scrollHeight;
    const offsetHeight = this.element.offsetHeight;

    this.setState({ fullyScrolled: scrollTop >= scrollHeight - offsetHeight });
  };

  render() {
    const { children, ...rest } = this.props;
    const { fullyScrolled } = this.state;
    return (
      <div
        onScroll={this.handleScroll}
        ref={elm => (this.element = elm)}
        style={{ ...this.style, background: fullyScrolled ? 'blue' : 'red' }}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node
};

export default Scrollable;
