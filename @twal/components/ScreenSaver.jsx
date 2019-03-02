import React from 'react';
import { withTranslation } from 'react-i18next';

class ScreenSaver extends React.Component {
  render() {
    return <div>Ceci est un screenSaver</div>;
  }
}

export default withTranslation()(ScreenSaver);
