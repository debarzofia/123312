import Script from "next/script";
import menuMarkup from "./menuMarkup";

export default function Home() {
  return (
    <>
      <div id="net-cafe-app" dangerouslySetInnerHTML={{ __html: menuMarkup }} />
      <Script src="/menu.js" strategy="afterInteractive" />
    </>
  );
}
