import { createAppContainer } from 'react-navigation'

import MainAppStack from '../Navigation/StackNavigators/MainAppStack'

const AppContainer = createAppContainer(MainAppStack)

export default AppContainer