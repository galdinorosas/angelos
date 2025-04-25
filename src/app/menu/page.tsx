'use client'

import { useState } from "react";
import ImageModal from "@/components/menu/Modal";
import menu from "@/state/menu.json";
import { MenuItem } from "@/types/menu";
import ItemList from "@/components/menu/ItemList";
import ScrollButtonList from "@/components/menu/ScrollButtonList";
import ScrollToTopButton from "@/components/menu/ScrollToTopButton";
const menuSandwichData: MenuItem[] = menu.sandwiches;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const subItemListClassName = "mb-16 mt-16";

  const sectionTitles = [
    "All Sandwiches",
    "House Menu",
    "Home Made Salads",
    "Marinated Salads",
    "Low Calorie Salads",
    "Beverages",
    "Desserts"
  ]

  return (
    <>
      <section className="w-full h-full bg-gray px-4 md:px-8 py-12 font-[family-name:var(--font-poppins)]">
        <h2 className="text-[32px] font-md text-center md:text-left mb-12">
          Our Menu
        </h2>
        <ScrollButtonList sectionHeaders={sectionTitles} />
        <ItemList items={menuSandwichData.filter((item) => item.isFavorite)} title="Customer Favorites" className="mb-16" onClick={() => setShowModal(true)} />
        <div id="intersection-observer-target" className="w-0 h-0" />
        <ItemList items={menuSandwichData} title={sectionTitles[0]} className="mt-16" onClick={() => setShowModal(true)} />
        <ItemList items={menu.houseMenu} title={sectionTitles[1]} className={subItemListClassName} isSubList />
        <ItemList items={menu.homeMadeSalad} title={sectionTitles[2]} className={subItemListClassName} isSubList />
        <ItemList items={menu.marinatedSalads} title={sectionTitles[3]} className={subItemListClassName} isSubList />
        <ItemList items={menu.lowCalorieSalads} title={sectionTitles[4]} className={subItemListClassName} isSubList />
        <ItemList items={menu.beverages} title={sectionTitles[5]} className={subItemListClassName} isSubList />
        <ItemList items={menu.desserts} title={sectionTitles[6]} className={subItemListClassName} isSubList />
      </section>
      <ScrollToTopButton />
      {showModal && <ImageModal handleClose={() => setShowModal(false)}/>}
    </>
  );
}
