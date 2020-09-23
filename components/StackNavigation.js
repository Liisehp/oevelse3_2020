
import {createStackNavigator} from "react-navigation-stack";
import SettingsScreen from "./NavigationComponents/SettingsScreen";
import DetailsScreen from "./NavigationComponents/DetailsScreen";

/*Her har vi stack navigationen*/
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Settings: { screen: SettingsScreen },
        Details:{screen: DetailsScreen}
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Settings',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default SettingStack