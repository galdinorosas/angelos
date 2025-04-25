import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type ItemCardProps = {
    image: string;
    name: string;
    price: string;
    isFavorite?: boolean;
    onClick?: () => void;
}

const ItemCard = ({ image, name, price, isFavorite, onClick }: ItemCardProps) => {

  return (
    <div onClick={onClick} className={"w-full min-w-fit-content h-[110px] bg-white rounded-lg shadow-md flex border border-gray-300 overflow-hidden hover:border-blue-hover hover:shadow-lg cursor-pointer"}>
        <div className="w-full max-w-[125px] md:max-w-[200px] lg:max-w-[225px] h-full border-gray-300 border-r">
            <Image className="w-full h-full object-cover object-center" src={image} alt={name} width={200} height={200} />
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