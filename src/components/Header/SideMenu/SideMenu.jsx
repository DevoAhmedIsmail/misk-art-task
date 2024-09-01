"use client";

import Image from "next/image"
import { useState } from "react";

import SliderMenu from "./SliderMenu/SliderMenu"
import MenuIcon from "/public/assets/icons/Menu.svg"
import Button from "@/components/Shared/Button/Button";

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