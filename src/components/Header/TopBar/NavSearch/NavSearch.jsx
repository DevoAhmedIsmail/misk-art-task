"use client"
import Image from "next/image"
import searchIcon from "/public/assets/icons/search.svg"
import { useState } from "react"
import SearchLayout from "./SearchLayout/SearchLayout"

const NavSearch = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  return (
    <div>
      <Image
        src={searchIcon} 
        width={20} 
        height={20} 
        alt="search"
        className="cursor-pointer"
        onClick={()=> setIsOpenSearch(true)}
       />
      
       <SearchLayout
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
       />
    </div>
  )
}

export default NavSearch
