/**
 * @format
 */
// importnig redux stuff
import {Provider, connect} from 'react-redux';
import store from './src/redux/store';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
