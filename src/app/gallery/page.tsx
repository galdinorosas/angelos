'use client'

import ImageModal from "@/components/menu/Modal";
import Image from "next/image";
import cn from "classnames";
import { useState } from "react";
import { galleryRoutes } from "@/state/menu.json";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const commonImageClassname = "border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-lg hover:border-blue-hover object-cover w-full h-[300px]"

  const handleClick = (image: string, name: string) => {
    sessionStorage.setItem('imageState', JSON.stringify({image, name}));
    setShowModal(true);
  }

  return (
    <section className="w-full h-screen bg-gray px-4 md:px-8 py-12 font-[family-name:var(--font-poppins)]">
      <h2 className="text-[32px] font-md text-center mb-12">
        Gallery
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[200px]">
        {galleryRoutes.map((route, i, array) => (
          <Image key={route} className={cn(commonImageClassname, i === array.length - 1 && "mb-24")} src={route} alt="Gallery" width={500} height={500} onClick={() => handleClick(route, route)}/>
        ))}
      </section>
      {showModal && <ImageModal handleClose={() => setShowModal(false)}/>}
    </section>
  );
}


export default Gallery;