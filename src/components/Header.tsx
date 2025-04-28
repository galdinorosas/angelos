"use client";

import Link from "next/link";
import cn from "classnames";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";
import Modal from 'react-modal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('body');
    const handleResetMenuState = () => {
      window.addEventListener("resize", () => {
        setIsOpen(false)
      });
    }

    handleResetMenuState();

    return () => {
      window.removeEventListener("resize", handleResetMenuState);
    }
  }, []);

  const getNavigationLinks = (key: string) => ([
    <Link key={`${key}-menu`} className="hover:text-blue-hover" href="/menu">Menu</Link>,
    <Link key={`${key}-contact`} className="hover:text-blue-hover" href="/contact">Contact</Link>,
    // <Link key={`${key}-about`} className="hover:text-blue-hover" href="/about">About</Link>,
    <Link key={`${key}-gallery`} className="hover:text-blue-hover" href="/gallery">Gallery</Link>
  ])
  
  return (
    <>
      <nav className="w-full max-w-100vw bg-transparent fixed z-10">
        <section className="h-[60px] max-w-[1200px] py-4 px-8 flex place-content-between mx-auto bg-white border-l border-r shadow-gray-300 shadow-sm">
          <Link href="/" className="font-[family-name:var(--font-italianno)] text-black text-[24px] md:text-[32px] -mt-1 md:-mt-[10px]" onClick={() => setIsOpen(false)}>Angelos Gourmet Deli.</Link>
          <section className="hidden md:flex gap-4 text-black items-center font-[family-name:var(--font-poppins)]">
            {getNavigationLinks("desktop")}
          </section>
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
      </nav>
      <div className={cn("fixed h-screen transition-all top-[60px] duration-600 ease-out bg-white text-[24px] pt-12 border-l border-r overflow-x-hidden z-10", { "w-screen": isOpen, "w-0 border-none": !isOpen })}>
        <div className={cn("max-w-[1200px] mx-auto h-screen w-screen")} onClick={() => setIsOpen(false)}>
          <section className="flex flex-col gap-8 text-black items-center justify-center font-[family-name:var(--font-poppins)]">
            {getNavigationLinks("mobile")}
          </section>
        </div>
      </div>
    </>
    
  );
}