


const EmployeeFunctionES6ComponentStyle = {
  border: "1px solid blue",
  backgroundColor: "skyblue",
  margin: "10px",
  padding: "10px",
  borderRadius: "5px"
}


const EmployeeES6Component = (props)=>{

  const changeAddress = (event) =>{
    console.log(event);
    alert('address is getting changed es6')
  }
    const {name ,designation,age } = props;
    return (
        <div style={EmployeeFunctionES6ComponentStyle}>
        <h2 style={{ color: 'blue', backgroundColor: 'lightblue', border: '1px solid blue' }}>Employee ES6 Component</h2>
        <p className="paraf-es6-style">Name:{name}</p>
        <p>Desgination:{designation}</p>
        <p>Age:{age}</p>
        <button onClick={(event) => changeAddress(event)}>Change Address</button>
      </div>
    )
}

export default EmployeeES6Component;