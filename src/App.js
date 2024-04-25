import './App.css';
import BoxCard from './components/BoxCard';
import Card from './components/Card';
import AbstractImg from './components/AbstractImg';
import AddNewCard from './components/AddNewCard';
import heroCard from './components/dataCards/heroCard';
import skils from './components/dataCards/Skils';
import magic from './components/dataCards/Magic';


function App() {
  return (
    <> 
    <div className="App">
      <header className="App-header">
        <AbstractImg/>
        <p>
          Персонаж ДнД
        </p>
      </header>
      <div className="App-body">
        <Card props={heroCard}/>
        <AddNewCard/>
        <BoxCard props={skils}/>
        <BoxCard props={magic}/>
        <image src="penpen.jpg" alt="log"/>
      </div>
    </div>
    </>
  );
}

export default App;
