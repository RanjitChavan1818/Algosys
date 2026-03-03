import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar({ showSearch = true, showUser = true }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const history = useHistory()

  const searchItems = [
    "linear search",
    "binary search",
    "bubble sort",
    "selection sort",
    "stack",
    "queue",
    "binary search tree",
  ]

  const searchMap = {
    "linear search": "/admin/dashboard/linerSearch",
    "binary search": "/admin/dashboard/binarySearch",
    "bubble sort": "/admin/dashboard/bubbleSort",
    "selection sort": "/admin/dashboard/selectionSort",
    "stack": "/admin/dashboard/stack",
    "queue": "/admin/dashboard/queue",
    "binary search tree": "/admin/dashboard/binarySearchTree"
  }

  const handleSearch = () =>{
    const path = searchMap[searchQuery.toLowerCase()]
    if(path){
      history.push(path)
    }
    else{
      alert("Page not found for this search!")
    }
  }

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      handleSearch()
    }
  }

  const handleInputChange = (e) =>{
    const query = e.target.value 
    setSearchQuery(query)

    if(query){
      const filtered = searchItems.filter(items => items.toLowerCase().includes(query.toLowerCase()))
      setFilteredSuggestions(filtered)
    }
    else{
      setFilteredSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion)=>{
    const path = searchMap[suggestion.toLowerCase()]
    history.push(path)
    setFilteredSuggestions([])
  }

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Home
          </a>
          {/* Form */}
          {showSearch && (
            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                {filteredSuggestions.length > 0 && (
                  <ul className="absolute mt-16 bg-white border rounded shadow-lg w-full">
                    {filteredSuggestions.map((suggestion, index)=>(
                      <li 
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        key={index}
                        onClick={()=>handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </form>
          )}
          {/* User */}
          {showUser && (
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          )}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
