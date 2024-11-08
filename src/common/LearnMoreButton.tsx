import { Arrow } from "@/icons/Arrow"
import Link from "next/link"

interface LearnMoreButtonProps {
    href: URL,
}
export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({href}) => {
    return (
    <Link href={href} passHref>
        <div className="flex justify-between desktop:w-[164px]">
<div className="w-10 aspect-square rounded-full">
    <Arrow />
</div>
<p className="hidden desktop:block desktop:text-5">Learn more</p>
        </div>
    </Link>)
}