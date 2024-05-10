
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            {/* Other routes */}
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
