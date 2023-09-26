import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'


function Home() {

  return (
    <div className="App">
      <MyNavBar />
      <ListStudents />

    </div>
  )
}

export default Home
