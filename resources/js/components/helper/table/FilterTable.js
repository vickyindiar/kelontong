import React from 'react'

const FilterTable = ({filter}) => {
    const handleOnChange = (e) => {
        filter(e.target.value);
    }
  return (
    // <div className="input-field col s6 offset-s6">
    //     <i className="material-icons prefix">seacrh</i>
    //     <input type="text" id="auto-complete-table" onChange={handleOnChange}/>
    //     <label htmlFor="auto-complete-table">search</label>
    // </div>   
    <div className="actions">
          <a href="#" className="search-toggle waves-effect btn-flat nopadding"><i className="material-icons">search</i></a>
    </div>   
  )
}

export default FilterTable
