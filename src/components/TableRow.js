import React from 'react'

import TableCell from './TableCell'

function renderCols(numCols,newColor,newFill,newRemove,remFunc){
    console.log(numCols)
    let allCols=[];
    for(let i=0;i<numCols;i++){
        console.log("hello")
         allCols.push(
         <TableCell 
         color={newColor}
         fillColors={newFill}
         removeColors={newRemove}
         removeFunction={remFunc}
         />)
    }
    return allCols;
}

function TableRow(props){


    return(

        <tr className="table-row">
            {renderCols(props.cols,props.color,props.fillColors, props.removeColors,props.removeFunction)}
        </tr>
    )
}
export default TableRow;