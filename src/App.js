import logo from './logo.svg';
import './App.css';

const props = {
  title: "1",
  description: "2"
}

const AbstractImg = () => {
  return(
    <img src= {logo} className='App-logo' alt="logo"/>
  );
}

const BoxCard = (title, asd) =>{
  return(
    <div className='textcard'>
      <h3>{title}</h3>
      <asd/>
    </div>
  );
}

  const Card = ({image, title, description}) => {
  return(
    <div className='CastomCard ColorCard DerectionCard'>
      <img src={image || './components/images/penpen.jpg'} className='image' alt='logo'/>
      <div className='CastomTextBox'>
        <h4>
          {title}
        </h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

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
        <Card title="1" description="2"/>
        

        <div className='CastomCard ColorBoxCard DerectionBoxCard'>
          <h4>Навыки</h4>
          <div>
            <Card image={logo} title = "101" description="102"/>
            <Card title = "101" description="102"/>
            <Card title = "101" description="102"/>
          </div>
        </div>

        <div className='CastomCard ColorBoxCard DerectionBoxCard'>
          <h4>Магия</h4>
          <div>
            <Card image={logo} title = "101" description="102"/>
            <Card title = "101" description="102"/>
            <Card title = "101" description="102"/>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
