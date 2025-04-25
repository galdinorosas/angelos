import cn from "classnames";

export default function HamburgerMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {

  return (
    <div className="hamburger-menu-container cursor-pointer -mt-[10px] -mr-6 md:hidden">
        <a id="menu-toggle" className={cn("menu-toggle", { "nav-open": isOpen })} onClick={() => setIsOpen(!isOpen)}>
            <span className="menu-toggle-bar menu-toggle-bar--top"></span>
            <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
            <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </a>
    </div>
  );
}