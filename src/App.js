import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Header from './components/Header'


import './App.css';


const App=()=>(
    <div className='sidebar-header-home-con'>
      <div className='sidebar'>
        <Sidebar/>
        </div>
      <div className='header-home-con'>
        <Header/>
        <Home/>
      </div>
    </div>
)

export default App;
