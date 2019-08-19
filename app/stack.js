import { createStackNavigator, createAppContainer } from 'react-navigation'
import Feeds from '../app/screens/feeds/feeds'



const AppNavigator = createStackNavigator({
    Feeds: {
        screen: Feeds,
    },

},
    {
        initialRouteName: 'Feeds',
        headerMode: 'none'
    });
export default createAppContainer(AppNavigator);
