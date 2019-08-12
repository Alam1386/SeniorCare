import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'


const reactotron = Reactotron
  .configure({ name: 'Senior Care' })
  .use(reactotronRedux())
  .connect()

  export default reactotron