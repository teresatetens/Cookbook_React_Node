import React from "react";
import "./App.css"
import { FaSearch } from "react-icons/fa";

function SearchBar(){

    return (
        <form className="search">
            <input className="input" type="text" placeholder="search recipe"></input>
            <button className="searchButton"><FaSearch /></button>
        </form>
    );
}

export default SearchBar;