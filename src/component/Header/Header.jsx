import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capatilize'>Find your book of Choice </h2><br />
          <p className='header-text fs-18 fw-3'>Welcome to Studysphere booksearch app(BookHub) in partners with openlibrary org,we will provide for you the neccessary details you will need to know about a book.Ensuring  you to know more about the book before reading and  the book history . </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header