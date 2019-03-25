import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '@twal/styles/components/ui/scrollable.scss';

class Scrollable extends React.PureComponent {
  state = {
    scrollable: React.createRef(),
    fullyScrolled: true
  };

  handleScrollPosition = elm => {
    const elem = elm.current.firstChild;
    const scrollTop = elem.scrollTop;
    const scrollHeight = elem.scrollHeight;
    const offsetHeight = elem.offsetHeight;

    this.setState({ fullyScrolled: scrollTop >= scrollHeight - offsetHeight });
  };

  componentDidMount() {
    const { scrollable } = this.state;
    this.handleScrollPosition(scrollable);
  }

  componentDidUpdate() {
    const { scrollable } = this.state;
    this.handleScrollPosition(scrollable);
  }

  handleScroll = e => {
    const { scrollable } = this.state;
    this.handleScrollPosition(scrollable);
  };

  render() {
    const { children, ...rest } = this.props;
    const { fullyScrolled, scrollable } = this.state;
    const scrollOverlay = fullyScrolled;
    return (
      <div
        className={classnames('scrollable', { scrollOverlay })}
        onScroll={this.handleScroll}
        ref={scrollable}
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
