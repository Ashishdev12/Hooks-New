import React, { useState, useMemo } from "react";

function TableComponent({ data }) {

    const[searchList, setSearchList] = useState('')

    const filteredData = data.filter((item)=>{
        return Object.values(item).some(
        value=>value.toString().toLowerCase().includes(searchList.toLowerCase()))
        
    })

    const headings = useMemo(()=>{
        console.log('render');
        return Object.keys(data[0]).map((heading) => {
            return <th key={heading}>{heading}</th>;
        }
    )
    },[data]) 

    const tableBody = filteredData.map((row) => {
            return (
              <tr key={row.id}>
                {Object.values(row).map((value) => {
                  return <td key={value}>{value}</td>
                })}
              </tr>
            );
          })

  return (
    <div>
        <input type="text" 
        placeholder="search here"
        value={searchList} 
        onChange={(e)=>setSearchList(e.target.value)}/>

      <table>
        <thead>

          <tr>
            {/* You can save this is in variable for cleaner code */}
            {headings}
          </tr>

        </thead>
        <tbody>
             {/* You can save this is in variable for cleaner code */}
          {tableBody}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
