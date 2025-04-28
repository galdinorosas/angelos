import Image from "next/image";

import SquareLink from "@/components/landing/SquareLink";
import storeFront from "../../public/store-front.webp"


export default function Home() {
  const menuLink = <SquareLink key="menu-link" text="View our menu" href="/menu" />
  // const aboutUsLink = <SquareLink key="about-us-link" text="About us" href="/about"/>
  const contactUsLink = <SquareLink key="contact-us-link" text="Contact us" href="/contact"/>
  const galleryLink = <SquareLink key="gallery-link" text="View gallery" href="/gallery"/>

  const commonImageClassName = "rounded-md w-full h-[300px] md:h-[400px] bg-[#F7F8F8] bg-cover bg-center relative z-0"
  const menuImage = <div key="menu-image" className={commonImageClassName}>
    <Image  alt="menu-image" src="/sandwich-group.webp"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" fill className="rounded-md" />
  </div>
  // const aboutUsImage = <Image key="about-us-image" className={`bg-[url('../../public/sandwich-group.webp')] loading="lazy" ${commonImageClassName}`} />
  const contactUsImage = <div key="contact-us-image" className={commonImageClassName}>
    <Image alt="contact-us-image" src="/owners.webp"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" fill className="rounded-md" loading="lazy"/>
  </div>
  const galleryImage = <div key="gallery-image" className={commonImageClassName}>
    <Image alt="gallery-image" src="/chips-2.webp"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" fill className="rounded-md" loading="lazy"/>
  </div>

  const mobileOrder = [
    menuLink,
    menuImage,
    // aboutUsLink,
    // aboutUsImage,
    contactUsLink,
    contactUsImage,
    galleryLink,
    galleryImage
  ]

  const desktopOrder = [
    menuImage,
    menuLink,
    // aboutUsLink,
    // aboutUsImage,
    contactUsLink,
    contactUsImage,
    galleryImage,
    galleryLink
  ]

  return (
    <>
      <Image
          className="w-full object-cover h-[300px] md:h-[500px]"
          src={storeFront}
          alt="Angelos Store Front"
          priority
      />
        <div className="hidden md:grid grid-cols-2 gap-4 p-4">
          {desktopOrder}
        </div>
        <div className="grid grid-cols-1 md:hidden gap-4 p-4">
          {mobileOrder}
        </div>
    </>
  );
}
