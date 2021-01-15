import React from 'react'

export default class TableCell extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cellColor:""
        };
    }
    handleColor=()=>{
        //this.props.removeFunction(false)
        this.setState({
            cellColor:this.props.color
        });
        
    }

    render(){
        console.log("color:",this.props.color)
        if(this.props.removeColors===false &&this.props.fillColors===false){
            return(
                <td className="table-cell"
                style={{backgroundColor:this.state.cellColor}}
                onClick={this.handleColor}
                >  
                </td>
                )
         }
        if(this.props.removeColors===true){
            // console.log(this.props.removeColor)
            // this.setState({
            //     cellColor:this.props.color
            // })
            return(
                <td className="table-cell"
                style={{backgroundColor:this.state.cellColor}}
                backgroundColor={this.handleColor}
                >  
                </td>
            )
        }
        if(this.props.fillColors===true){

            return(
                <td className="table-cell"
                style={{backgroundColor:this.state.color}}
                backgroundColor={this.handleColor}
                >  
                </td>
            )
        }
        else{
           
        }
        
    }
}