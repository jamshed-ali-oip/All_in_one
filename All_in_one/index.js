/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainNav from './src/navigations';

const Myapp=()=>{
    return(
        <MainNav/>
    )
}

AppRegistry.registerComponent(appName, () => Myapp);
