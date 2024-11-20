import { FC } from "react";

export const Favicon: FC = () => {
   return (
      <>



         <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
         <link rel="shortcut icon" href="/favicon/favicon.ico" />


         <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />


         <link rel="manifest" href="/favicon/site.webmanifest" />
         <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
         <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />


         <meta name="msapplication-TileColor" content="#ffffff" />
         <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
         <meta name="msapplication-TileImage" content="/favicon/mstile-150x150.png" />


         <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />


         <meta name="theme-color" content="#ffffff" />
      </>

   );
};
