import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type ItemCardProps = {
    image: string;
    name: string;
    price: string;
    isFavorite?: boolean;
    onClick?: () => void;
    lazyLoading?: boolean;
}

const ItemCard = ({ image, name, price, isFavorite, onClick, lazyLoading }: ItemCardProps) => {

  return (
    <div onClick={onClick} className={"w-[300px] h-[350px] sm:w-[225px] sm:h-[325px] md:w-[225px] md:h-[325px] lg:w-[300px] lg:h-[400px] bg-white rounded-lg shadow-md flex flex-col border border-gray-300 hover:border-blue-hover hover:shadow-lg cursor-pointer"}>
        <div className="w-full min-h-[250px] sm:min-h-[225px] md:min-h-[225px] lg:min-h-[300px]">
            <Image className="w-full h-full object-cover object-center rounded-t-md" src={image} alt={name} width={200} height={400} loading={lazyLoading ? "lazy" : "eager"} />
        </div>
        <div className="w-full h-full py-3 pl-4 pr-3 flex flex-col justify-between">
            <h3 className="line-clamp-2 font font-medium">{name}</h3>
            <div className="flex items-center justify-between"> 
              <p className="line-clamp-1 text-[14px] text-gray-600">{price}</p>
              {isFavorite && <div className="flex items-center gap-1 text-green-500">
                <CheckBadgeIcon className="w-5 h-5" />
                <p className="text-[12px]">Most Popular</p>
              </div>}
            </div>
        </div>
    </div>
  )
}

export default ItemCard;