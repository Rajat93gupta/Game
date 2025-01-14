import styles from "./style"
import { NavBar , Hero, Stats, Billing, CardDeal, Tesimonials, Client, Footer, Business, CTA } from "./components";
const App=()=>(
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>

      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/> 
          <CardDeal/>
          <Tesimonials/>
          <Client/>
          <CTA/>
          <Footer/>
        </div>

      </div>
     
     
    </div>
  );


export default App;
