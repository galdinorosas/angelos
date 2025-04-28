
type ScrollButtonListProps = {
    sectionHeaders: string[]
}

const ScrollButtonList = ({sectionHeaders}: ScrollButtonListProps) => {
    return (
        <section className="flex flex-row gap-3 flex-wrap justify-center">
            {sectionHeaders.map(header => (
                <button 
                    onClick={() => {
                        const section = document.getElementById(header);
                        if (section) {
                            section.scrollIntoView({behavior: 'smooth'});
                        }
                    }}
                    key={header}
                    className="text-xs md:text-sm px-2 md:px-4 py-2 border border-1 rounded-md cursor-pointer hover:bg-blue-hover hover:border-blue-hover hover:text-white transition-all duration-300"
                >
                    {header}
                </button>
            ))}
        </section>
    )
}

export default ScrollButtonList;