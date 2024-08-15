import "../styles/globals.css";

//internal

import {NavBar, Footer} from "../Components";
import {CrowdFubdingProvider} from "../Context/CroudFunding"


export default function App({ Component, pageProps }) {
  return (
    <div>
      <CrowdFubdingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CrowdFubdingProvider>
    </div>
  );
}
