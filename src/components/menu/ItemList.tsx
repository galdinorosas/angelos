import ItemCard from "./ItemCard"
import SectionHeader from "./SectionHeader"
import { MenuItem } from "@/types/menu"

type ItemListProps = {
    items: MenuItem[] | string[]
    title: string
    className?: string
    isSubList?: boolean
    onClick?: () => void
}

const ItemList = ({items, title, className, isSubList, onClick}: ItemListProps) => {
    const handleClick = (image: string, name: string) => {
        sessionStorage.setItem('imageState', JSON.stringify({image, name}));
        onClick?.();
      }

    if (isSubList) {
        return (
            <div className={className}>
                <SectionHeader name={title} id={title} />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map(item => <div key={item as string}>{`- ${item}`}</div>)}
                </section>
            </div>
        )
    }

    return (
        <div className={className}>
            <SectionHeader name={title} id={title} />
            <div className="text-gray-600 text-sm flex flex-row gap-4 mb-16">
            <p>{`Includes: `}</p>
            <p>Choice of sliced bread (White, Wheat, Light or Dark Rye, or Sour) or rolls (Sweet, Sour, Onion, or Dutch Crunch), mayo, mustard (Regular, Mendocino, or Dijon), lettuce, pickles, tomatoes, sprouts, onions, peppers, and choice of cheese.</p>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-12">
            {items.map(item => {
                if (typeof item === 'string') return null;
                return (
                    <ItemCard 
                        key={item.name} 
                        onClick={() => {
                            handleClick(item.image, item.name);
                        }}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        isFavorite={item.isFavorite}
                    />
                );
            })}
            </section>
        </div>
    )
    
}

export default ItemList;