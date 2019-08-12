/**
 * @format
 */

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { AppRegistry } from 'react-native';
import App from './App/Containers/App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])
console.disableYellowBox = true;  
AppRegistry.registerComponent(appName, () => App);
