import React ,{useState} from 'react';
import './App.css';
import Header from './components/header';

function App() {
  const [user, setUser] = useState({
    displayName:"kelvin randu",
    email: "randukelvin@gmail.com",
    emailVerified: true,
    phoneNumber:  null,
    photoURL:"https://lh3.googleusercontent.com/ogw/ADea4I5aNx4aP1I8gm0lDsnn4Mhd3PQwqJZbtK4pjYwh=s32-c-mo"
  })
  return (
    <div className="App">
      <Header userPhoto={user.photoURL}/>
    
        <p>
          welcome to google drive mtaani
        </p>

    
    </div>
  );
}

export default App;
