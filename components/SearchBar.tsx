"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

function SearchBar() {
    let [manufacturer,setManuFacturer]=useState('')

    let handleSearch=()=>{}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
      <SearchManufacturer
        manufacturer={manufacturer}
        setManuFacturer={setManuFacturer}
      />
    
    </div>
    </form>
  )
}

export default SearchBar
