import './App.css';
import BoxCard from './components/BoxCard';
import Card from './components/Card';
import AbstractImg from './components/AbstractImg';
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
          Learn React
        </p>
      </header>
      <div className="App-body">
        <Card props={heroCard}/>
        <BoxCard props={skils}/>
        <BoxCard props={magic}/>
        <image src="penpen.jpg" alt="log"/>
      </div>
    </div>
    </>
  );
}

export default App;
