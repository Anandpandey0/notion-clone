import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
