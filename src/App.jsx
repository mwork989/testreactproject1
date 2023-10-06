
import './App.css';
import EmployeeClassComponent from './EmployeeC';
import EmployeeES5Component from './EmployeeEs5';
import EmployeeES6Component from './EmployeeEs6';

function App() {
  const details =  {name:"timothy2" ,designation:"HR" ,age:"27"}
  return (
    <div className="App">
        <h2>Welcome to react training day2</h2>
        <EmployeeClassComponent name="david" designation="developer" age="35"/>
        {/* <EmployeeClassComponent name="david" designation="developer" age="35" newAddress="hyderabad"/> */}
        <EmployeeES5Component name="maria" designation="tester" age="23"/>
        <EmployeeES6Component {...details}/>
    </div>
  );
}

export default App;
