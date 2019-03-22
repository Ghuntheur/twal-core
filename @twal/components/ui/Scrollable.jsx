import React from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import classnames from 'classnames';

import 'simplebar/dist/simplebar.min.css';
import '@twal/styles/components/ui/scrollable.scss';

class Scrollable extends React.Component {
  state = {
    fullyScrolled: true,
    scrollable: React.createRef()
  };

  componentDidMount() {
    const elm = this.state.scrollable.current.firstChild;
    const scrollTop = elm.scrollTop;
    const scrollHeight = elm.scrollHeight;
    const offsetHeight = elm.offsetHeight;

    this.setState({ fullyScrolled: scrollTop >= scrollHeight - offsetHeight });
    console.log(this.state.fullyScrolled);
  }

  handleScroll = ev => {
    const elm = ev.target;
    const scrollTop = elm.scrollTop;
    const scrollHeight = elm.scrollHeight;
    const offsetHeight = elm.offsetHeight;

    this.setState({ fullyScrolled: scrollTop >= scrollHeight - offsetHeight });
    console.log(this.state.fullyScrolled);
  };

  render() {
    const { children, ...rest } = this.props;
    const { fullyScrolled, scrollable } = this.state;
    const scrollOverlay = !fullyScrolled;
    console.log(scrollOverlay);
    return (
      <div ref={scrollable}>
        <SimpleBar
          onScroll={this.handleScroll}
          className={classnames('scrollable', { scrollOverlay })}
          {...rest}
        >
          {children}
        </SimpleBar>
      </div>
    );
  }
}

Scrollable.propTypes = {
  children: PropTypes.node
};

export default Scrollable;
