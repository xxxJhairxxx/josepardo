import { FC } from "react";

interface TitleProps {
   title: string;
   classname?: string;
   center?:boolean;
   hidden?: boolean;
   tag?: keyof JSX.IntrinsicElements;
}

export const Title: FC<TitleProps> = ({ title, classname,center,hidden, tag: Tag = "h2"}) => {
   const ogText = title ? (title.includes("/") ? title.split("/") : [title]) : [];
   const hasSlash = ogText.length > 1;

   return (
        <Tag className={`title-prin ${center && "center"} ${hidden && "none"} ${classname || ''}`}>
            {hasSlash ? (
            <span>
               {ogText[0]} {ogText[1] && <><br /><span>{ogText[1]}</span></>}
            </span>
         ) : (
            title
         )}
        </Tag>
   );
};