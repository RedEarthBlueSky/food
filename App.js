import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SearchScreen from "./src/screens/SearchScreen"
import ResultsShowScreen from "./src/screens/ResultsShowScreen"

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  }, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search',
  }
})

export default createAppContainer(navigator)
