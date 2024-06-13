import logo from './logo.svg';
import './App.scss';
import Mycomponer from './example/Mycomponer';
import ListTodo from './todos/ListTodo';
// import AddComponent from './example/AddComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Hoi Dan IT)
        </p>
        <ListTodo></ListTodo>
        {/* <Mycomponer>

        </Mycomponer> */}
      </header>
    </div>
  );
}

export default App;
