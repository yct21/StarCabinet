import { connect }                  from 'react-redux'
import App                          from '../components/app'

// Redux connection
const mapStateToProps = (state) => {
  return {
    data: state.mainReducer
  }
}

// Which props to inject from the global atomic state
export default connect(mapStateToProps)(App)
