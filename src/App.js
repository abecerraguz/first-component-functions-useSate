import './App.css';
import PersonCard from './components/PersonCard';
import LightSwitch from './components/LightSwitch';


function App() {

  
  const cards = [
    {
      id:1,
      firstName: "Doe",
      lastName: 'Jane',
      age:45,
      hairColor:'Black'
    },
    {
      id:2,
      firstName: "Smith",
      lastName: 'Jhone',
      age:88,
      hairColor:'Brown'
    },
    {
      id:3,
      firstName: "Fillmore",
      lastName: 'Millard',
      age:50,
      hairColor:'Brown'
    },
    {
      id:4,
      firstName: "Smith",
      lastName: 'María',
      age:62,
      hairColor:'Green'
    }
  ]

  let uniqid = require('uniqid');
  console.log('uniqid-->', uniqid())

  return (
        <div className="container">
        <ul className="lista">
            {
              cards.map((cards)=> (
              
                <li key={uniqid()}>
                  <PersonCard
                  firstName={cards.firstName}
                  lastName={cards.lastName}
                  age={cards.age}
                  hairColor={cards.hairColor}
                  >
                  <LightSwitch/>
                  </PersonCard>
                </li>
                
              ))
            }
        </ul>
        </div>
  );
}

export default App;
