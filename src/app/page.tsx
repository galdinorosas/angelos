'use client'

import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

import SquareLink from "@/components/landing/SquareLink";

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const menuLink = <SquareLink key="menu-link" text="View our menu" href="/menu" />
  const aboutUsLink = <SquareLink key="about-us-link" text="About us" href="/about"/>
  const contactUsLink = <SquareLink key="contact-us-link" text="Contact us" href="/contact"/>
  const galleryLink = <SquareLink key="gallery-link" text="View gallery" href="/gallery"/>

  const commonImageClassName = "rounded-md w-full h-[300px] md:h-[400px] bg-[#F7F8F8] bg-cover bg-center"
  const menuImage = <div key="menu-image" className={`bg-[url('../../public/sandwich-group.jpg')] ${commonImageClassName}`} />
  const aboutUsImage = <div key="about-us-image" className={`bg-[url('../../public/sandwich-group.jpg')] ${commonImageClassName}`} />
  const contactUsImage = <div key="contact-us-image" className={`bg-[url('../../public/sandwich-group.jpg')] ${commonImageClassName}`} />
  const galleryImage = <div key="gallery-image" className={`bg-[url('../../public/sandwich-group.jpg')] ${commonImageClassName}`} />

  const mobileOrder = [
    menuLink,
    menuImage,
    aboutUsLink,
    aboutUsImage,
    contactUsLink,
    contactUsImage,
    galleryLink,
    galleryImage
  ]

  const desktopOrder = [
    menuImage,
    menuLink,
    aboutUsLink,
    aboutUsImage,
    contactUsImage,
    contactUsLink,
    galleryLink,
    galleryImage
  ]

  return (
    <>
      <Image
          className="w-full object-cover h-[300px] md:h-[500px]"
          src="/store-front.jpg"
          alt="Angelos Store Front"
          width={1200}
          height={400}
          priority
      />
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4 p-4 bg-white">
        {!isMobile && desktopOrder}
        {isMobile && mobileOrder}
      </section>
    </>
      
    
  );
}
