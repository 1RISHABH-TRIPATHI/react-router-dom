/* eslint-disable no-unused-vars */
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchBar() {
    const [searchparam,setSearchParam]=useSearchParams();
  return (
    <div>
      search data <input type="text" name="" id="" placeholder='enter data ' onChange={(e)=>{
            setSearchParam(e.target.value)
      }}  />
    </div>
  )
}

export default SearchBar
