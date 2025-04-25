import Link from "next/link";

type SquareLinkProps = {
    text: string;
    href: string;
}

const SquareLink = ({text, href}: SquareLinkProps) => {
    return (
        <Link className="rounded-md w-full h-[100px] md:h-[400px] bg-[#F7F8F8] flex items-center justify-center text-[20px] md:text-[24px] underline underline-offset-[10px] hover:text-blue-hover" href={href}>{text}</Link>
    )
}
export default SquareLink;