"use client";

import { useState } from "react";
import Image from "next/image"

import SliderMenu from "./SliderMenu/SliderMenu"
import Button from "@/components/Shared/Button/Button";

// images
import MenuIcon from "/public/assets/icons/Menu.svg"

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=''>

      <Button 
        clickHandler={() => setIsOpen(true)}
        classes="!p-[16px]"
      >
        <Image src={MenuIcon} alt="Menu" width={24} height={24} />
      </Button>

      <SliderMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default SideMenu