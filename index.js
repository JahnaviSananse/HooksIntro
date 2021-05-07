/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import demoReducer from './hooksIntro/useReducer/demoReducer';
import demoState from './hooksIntro/useReducer/demoState';
import demoApp from './hooksIntro/Custom_useState/demoApp';
import demoEffect from './hooksIntro/useEffect/demoEffect';

AppRegistry.registerComponent(appName, () => demoEffect);
