import styles from "../style"
import Button from "./Button"
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-1 flex-col">
      <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className={`${styles.flexCenter} ml-0 sm:ml-10 sm:mt-0 mt-10`}>
      <Button/>
    </div>

  </section>
)

export default CTA
