import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MyScreenNavigator from '../components/Navigation';
// import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  Main: { screen: MyScreenNavigator }
});


export default AppNavigator;

// class AppWithNavigationState extends React.Component {
//
//   render() {
//     const { dispatch, nav } = this.props;
//     return (
//       <AppNavigator
//         // navigation={addNavigationHelpers({
//         //   dispatch,
//         //   state: nav,
//         //   addListener,
//         // })}
//       />
//     );
//   }
// // }
// //
// // const mapStateToProps = state => ({
// //   nav: state.nav,
// // });
//
//
// export default connect(mapStateToProps)(AppWithNavigationState);
