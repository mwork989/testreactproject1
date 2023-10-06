import { Component } from "react";
import ReactDOM from 'react-dom/client';

const EmployeeClassComponentStyle = {
    border:"1px solid red",
    backgroundColor:"beige",
    margin:"10px",
    padding:"10px",
    borderRadius:"5px"
}

class EmployeeClassComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            address:"bangalore"
        }

          // binding is necessary to provide this context in callback when applying event binding as showcased via button3
        //this.changeAddress = this.changeAddress.bind(this)
    }

    static getDerivedStateFromProps(props,state){
        return { address: props.newAddress? props.newAddress: state.address}
    }

    shouldComponentUpdate(){
            return true
    }


    render(){
        const {name ,designation,age } = this.props;
        return (
            <div style={EmployeeClassComponentStyle}>
                <h2 style={{color:'red',backgroundColor:'orange',border:'1px solid red'}}>Employee Class Component</h2>
                <p className='parac-style'>Name:{name}</p>
                <p>Desgination:{designation}</p>
                <p>Age:{age}</p>
                <p>Address:{this.state.address}</p>
                <button onClick={(event)=> this.changeAddress(event) }>Change Address</button>
                <section id="section1"></section>
                <section id="section2"></section>
                <input type="text" name="address" id="address" placeholder="Enter address" onChange={(event)=> this.changeAddress(event)}/>
                {/* <button onClick={this.changeAddress.bind(this) }>Change Address button2</button>
                <button onClick={this.changeAddress}>Change Address button3</button> */}
            </div>
        )
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                address:'Delhi'
            })
        },2000)
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('section1').innerHTML= 'Address value before'+ prevState.address;
        return null;
    }

    componentDidUpdate(){
        document.getElementById('section2').innerHTML= 'Address value after'+ this.state.address;
        
    }

    componentWillUnmount(){
        // setTimeout(()=>{
        //    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        // },2000)
    }

    changeAddress(event){
      
        this.setState({
            address:event.target.value
        })
    }
}

export default EmployeeClassComponent;

