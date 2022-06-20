import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';
import style from './style.css'

function App() {
  return (
    <div className="App" style={{backgroundColor:"whitesmoke", height:"98vh"}}>
      <Navbar></Navbar>
      <div style={{maxWidth:"100vw"}}>
        <h1 className="title" style={{marginBottom:100}}>CHECKPOINT <br/>REACT COMPONENTS</h1>
        <br/>
      </div>
      <div className="profile">
        <ProfilePhoto></ProfilePhoto>
        <div className="info">
          <FullName></FullName>
          <Adress></Adress>
        </div>

      </div>
      
    </div>
  );
}

export default App;
