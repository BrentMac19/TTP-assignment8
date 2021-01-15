import './App.css';
import React,{Component} from 'react';
import Table from './components/Table'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      numOfRows:3,
      numOfCols:3,
      color: "aliceblue",
      removeColors: false,
      fillColors: false
    }
  }

  handleAddRow=()=>{
    let existingRows=this.state.numOfRows;
    this.setState({
      numOfRows:existingRows+1
    })
  }
  handleAddCol=()=>{
    let existingCols=this.state.numOfCols;
    this.setState({
      numOfCols:existingCols+1
    })
  }
  handleRemoveRow=()=>{
    let existingRows=this.state.numOfRows;
    this.setState({
      numOfRows:existingRows-1
    })
  }
  handleRemoveCol=()=>{
    let existingCols=this.state.numOfCols;
    this.setState({
      numOfCols:existingCols-1
    })
  }
  removeColors=(value)=>{
    this.setState({
      color:"white",
       removeColors:value
    })
  }
  fillColors=(value)=>{
    this.setState({
       fillColors:value
    })
  }
  componentWillUpdate(prevState,prevProps){
    console.log(prevState)
    if(this.state.removeColors===true||this.state.fillColors===true){
      this.setState({
        fillColors:false,
        removeColors:false

      })
    }
    console.log("Remove: ",this.state.removeColors,"Fill: ",this.state.fillColors)

  }
  

  
  

  render(){
    return (
      <div className="App">
        <button type="button" onClick={()=>this.handleAddRow()}>Add Row</button>
        <button  type="button" onClick={()=>this.handleAddCol()}>Add Column</button>
        <button type="button" onClick={()=>this.handleRemoveRow()}>Remove Row</button>
        <button type="button" onClick={()=>this.handleRemoveCol()}>Remove Column</button>
        <button type="button" onClick={()=>this.removeColors(true)}>Clear Grid</button>
        <button type="button" onClick={()=>this.fillColors(true)}>Fill Grid</button>
       <br/><br/>
        <div class="color-select" id='colors'>
        <span>Choose Color you Wish to Change Cell Too: </span>
        <select onChange={(event)=>{
          this.setState({
            color:event.target.value
          })
        }}>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
        </select>
        </div>
        <br/>
        <Table numOfCols={this.state.numOfCols} 
        numOfRows={this.state.numOfRows}
        color={this.state.color}
        removeColors={this.state.removeColors}
        fillColors={this.state.fillColors}
        removeFunction={this.removeColors}
        />
        
      </div>
    );
  }
}

export default App;
