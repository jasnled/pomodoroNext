import Header from "@/containers/Header";
import Footer from "@/components/Footer";
import { ProviderAuth } from "@/hooks/useAuth";
import '@/styles/global.css';


export default function App({ Component, pageProps }) {
  return( 
  <>
    <ProviderAuth>
      <Header/>
        <div className='main-container'>
          <Component {...pageProps} />
        </div>
      <Footer/>
    </ProviderAuth>
  </>
  );
}
