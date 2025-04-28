'use client'

import ImageModal from "@/components/menu/Modal";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const commonImageClassname = "border border-gray-300 rounded-md shadow-sm cursor-pointer hover:shadow-lg hover:border-blue-hover"

  return (
    <section className="w-full h-screen bg-gray px-4 md:px-8 py-12 mb-24 font-[family-name:var(--font-poppins)]">
      <h2 className="text-[32px] font-md text-center md:text-left mb-12">
        Gallery
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/sandwich-group.webp" alt="Gallery" width={500} height={500} />
        <Image className={commonImageClassname} src="/store-front.jpg" alt="Gallery" width={500} height={500} />
      </section>
      {showModal && <ImageModal handleClose={() => setShowModal(false)}/>}
    </section>
  );
}


export default Gallery;