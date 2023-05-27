import Header from "@/containers/Header";
import Footer from "@/components/Footer";
import '@/styles/global.css'


export default function App({ Component, pageProps }) {
  return( 
  <>
    <Header/>
    <div className='main-container'>
      <Component {...pageProps} />
    </div>
    <Footer/>

    
  </>
  );
}
