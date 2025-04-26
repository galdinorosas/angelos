import Image from "next/image";

import SquareLink from "@/components/landing/SquareLink";
import storeFront from "../../public/store-front.webp"


export default function Home() {

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
          src={storeFront}
          alt="Angelos Store Front"
          priority
      />
      <section className="sm:hidden md:grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4 p-4 bg-white">
        {desktopOrder}
      </section>
      <section className="md:hidden grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4 p-4 bg-white">
        {mobileOrder}
      </section>
    </>
      
    
  );
}
