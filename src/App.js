import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <TaskListComponent></TaskListComponent> */}
          {/* <GreetingStyled name="Martin"></GreetingStyled> */}
      {/* </header> */}
      {/* <TaskListComponent></TaskListComponent> */}
      <ContactListComponent></ContactListComponent>
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
