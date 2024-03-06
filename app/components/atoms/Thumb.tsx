import { Picture } from "@/interfaces";
import Image from "next/image";


interface ThumbProps{
    image:Picture;
    className?: string;
    full?: boolean;
}

const Thumb = ({image,className="",full}:ThumbProps) => {
    return (
      
            <figure className={`${full ? "thumb__full": "thumb"} ${className}`}>
                    <Image  src={image.url} alt={image.alternativeText || ""} width={image.width} height={image.height} />
            </figure>
       
     );
}
 
export default Thumb;