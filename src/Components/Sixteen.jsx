import React, { useState } from 'react'

export default function Sixteen(items , itemsPerPage) {

    const [currentPage , setCurrentPage ] = useState(1);
    const indexOfLastItem = currentPage*itemsPerPage ;

    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    if (!Array.isArray(items)) {
      throw new Error("Items must be an array");
    }
    const currentItems = (items || []).slice(indexOfFirstItem, indexOfLastItem);

    // console.log(currentItems);
    const pageNumber = [];

    for(let i=1 ; i<=Math.ceil(items.length/itemsPerPage) ; i++ ){
        pageNumber.push(i);
    }
    if (!Array.isArray(items)) {
  throw new Error("Items must be an array");
}



  return (

    <div>
      <ul>
        {currentItems.map((item , index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
        <ul>
            {pageNumber.map((number , index) => (
                <li key={index} onClick={() => setCurrentPage(number)}>{number}</li>
            ))}
        </ul>
    </div>
  )
}
