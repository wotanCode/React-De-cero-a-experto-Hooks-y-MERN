import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {
  return (
    <Router>

      <div>
        <Routes>
          <Route exac path='/' element={<HomeScreen />} />
          <Route exac path='/about' element={<AboutScreen />} />
          <Route exac path='/login' element={<LoginScreen />} />



        </Routes>
      </div>

    </Router>
  )
}