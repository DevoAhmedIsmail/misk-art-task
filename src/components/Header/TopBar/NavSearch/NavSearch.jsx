import Image from "next/image"
import searchIcon from "/public/assets/icons/search.svg"

const NavSearch = () => {
  return (
    <div>
      <Image
        src={searchIcon} 
        width={20} 
        height={20} 
        alt="search"
        className="cursor-pointer"
       />
    </div>
  )
}

export default NavSearch
