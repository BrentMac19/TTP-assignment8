import React from 'react'

import TableRow from './TableRow'


function renderRows(numRows,numOfCols,newColor,newFillColors,newRemoveColors,remFunc){
    console.log(numRows)
    let allRows=[];
    for(let i=0;i<numRows;i++){
        console.log("hello")
         allRows.push(
         <TableRow 
         cols={numOfCols} 
         color={newColor}
         fillColors={newFillColors} 
         removeColors={newRemoveColors}
         removeFunction={remFunc}/>)
    }
    return allRows;
}

function Table(props){
    console.log(props);
    let numOfRows =props.numOfRows;
    let numOfCols=props.numOfCols;
    let newColor=props.color;
    let newFillColors=props.fillColors;
    let newRemoveColors=props.removeColors;

    

    return(
        <table className="table"> 
        {renderRows(numOfRows,numOfCols,newColor,newFillColors,newRemoveColors,props.removeFunction)}
        </table>
    )
}
export default Table;