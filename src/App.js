import './App.css';
import Message from './message';

const msgText = 'React first lesson';

function App(props) {
  return (
    <div className="App">
      <Message msgText={msgText}/>
    </div>
  );
}

export default App;