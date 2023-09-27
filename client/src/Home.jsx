import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import Contacts from './components/Contacts'


function Home() {

  return (
    <div className="App">
      <MyNavBar />
      <Contacts />

    </div>
  )
}

export default Home
