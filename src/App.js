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

const Title = (text) =>{
  return(
    <h4 className='text'>{text}</h4>
  );
}

const Description = (text) => {
  return(
    <p className='text'>{text}</p>
  );
}

const Textcard = (title,description) =>{
  return(
    <div className='textcard'>
      {title}
      {description}
    </div>
  );
}

const Card = (image='./src/components/images/penpen.jpg',textcard) => {
  return(
    <div className='cardCastom'>
      <img src={image} className='image' alt='logo'/>
      {textcard}
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
      <Card textcard={<Textcard title={<Title text='1'/>} description={<Description text="2"/>}/>}/>
      </div>
    </div>
    </>
  );
}

export default App;
