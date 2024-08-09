import { Picture } from "@/interfaces";
import Image from "next/image";


interface ThumbProps{
    image:Picture;
    className?: string;
    full?: boolean;
}

const Thumb = ({image,className="",full=false}:ThumbProps) => {
    return (
      
            <picture className={`thumb ${className}`}>
                   {image &&<Image className={`${full ? "!object-cover": "!object-contain"}`} src={image.url} alt={image.alternativeText ||''} width={image.width} height={image.height} />} 
            </picture>
       
     );
}
 
export default Thumb;