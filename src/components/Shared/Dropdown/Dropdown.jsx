"use client"
import { useEffect, useRef, useState } from "react";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import "./Dropdown.css";
// Images
import ArrowDown from "/public/assets/icons/Arrow down.svg"

export default function Dropdown({ subElement, children, className = "",translateText }) {
  const t = useTranslations(translateText);

  const [isShowing, setIsShowing] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = () => {
    if (dropdownRef.current) {
      setTimeout(() => {
        setIsShowing(false);
      }, [100]);
    }
  };

  useEffect(() => {
    if (isShowing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowing]);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center relative cursor-pointer gap-[8px]"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        {children}
        <Image
          src={ArrowDown}
          width={12}
          height={12}
          alt="arrow"
        />

      </div>
      {isShowing && (
        <div
          className={`dropdown ${className}`}
          ref={dropdownRef}
          onClick={() => setIsShowing(false)}
        >
          <ul className="dropdown-menu">
            {
              subElement.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-nowrap">
                  {
                    translateText ? t(item.name) : item.name
                  }
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
}
