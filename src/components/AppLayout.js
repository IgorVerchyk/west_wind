import React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';

const AppLayout = ({ errorMessage, children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* {errorMessage && alert(`Woops, something go wrong... ${errorMessage}`)} */}
    </div>
  );
};

export default connect(mapStateToProps)(AppLayout);