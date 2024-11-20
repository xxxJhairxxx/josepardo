import Head from "next/head";
import { FC } from "react";
import { MetaSEO } from "../../interfaces/shared";

interface SeoEngineProps {
   seo: MetaSEO;
}

export const SeoEngine: FC<SeoEngineProps> = ({ seo }) => {
   if (!Object.keys(seo).length) return <></>;
   return (
      <Head>
         <title>{seo.metaTitle}</title>
         <link rel="canonical" href={seo.canonicalURL || ""}></link>
         <meta name="description" content={seo.metaDescription || ""} />
         <meta name="keywords" content={seo.keywords || ""} />
         <meta name="robots" content={seo.metaRobots || "index, follow"} />
         <meta name="viewport" content={seo.metaViewport || "width=device-width, initial-scale=1.0"}></meta>
         <meta name="author" content="Jhair Hernan Infanzon Quispe" />
         <meta name="publisher" content="Jhair Hernan Infanzon Quispe" />

         <meta property="og:url" content={seo.canonicalURL || ""} />
         <meta property="og:type" content="website" />
         <meta property="og:title" content={seo.metaSocial.title} />
         <meta property="og:site_name" content={seo.metaSocial.title} />
         <meta property="og:description" content={seo.metaSocial.description} />
         <meta property="og:image" content={seo.metaSocial.image.url} />
         <meta property="og:locale" content="es_ES" />

         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:url" content={seo.canonicalURL || ""} />
         <meta name="twitter:title" content={seo.metaSocial.title} />
         <meta name="twitter:description" content={seo.metaSocial.description} />
         <meta name="twitter:image" content={seo.metaSocial.image.url} />





      </Head>
   );
};
