import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Insights from './pages/Insights'
import Team from './pages/Team'
import Careers from './pages/Careers'


const App = () => {
  

  return (
    <div>
      <Navbar />
      <Home />
      


    </div>
  )
}

export default App
