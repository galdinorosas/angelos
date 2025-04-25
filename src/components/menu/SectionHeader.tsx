type SectionHeaderProps = {
    name: string;
    id: string
}

const SectionHeader = ({name, id}: SectionHeaderProps) => {
    return (
        <div id={id} className="px-0 md:px-8 flex flex-row gap-4 items-center my-10 scroll-mt-24">
            <div className="w-full h-[1px] bg-gray-300" />
            <p className="text-[18px] font-md whitespace-nowrap text-gray-600">{name}</p>
            <div className="w-full h-[1px] bg-gray-300" />
        </div>
    )
}

export default SectionHeader;