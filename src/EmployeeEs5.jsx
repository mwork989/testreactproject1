

var EmployeeFunctionES5ComponentStyle ={
  border:"1px solid green",
  backgroundColor:"azure",
  margin:"10px",
  padding:"10px",
  borderRadius:"5px"
}


function EmployeeES5Component({name, designation ,age}) {

  function changeAddress(event) {
    console.log(event);
    alert('address is getting changed es5')
  }
  return (
    <div style={EmployeeFunctionES5ComponentStyle}>
      <h2 style={{color:'green',backgroundColor:'lightgreen',border:'1px solid green'}}>Employee ES5 Component</h2>
      <p className="paraf-style">Name:{name}</p>
      <p>Desgination:{designation}</p>
      <p>Age:{age}</p>
      <button onClick={(event) => changeAddress(event)}>Change Address</button>
    </div>
  );
}

export default EmployeeES5Component;
