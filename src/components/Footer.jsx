import styles from "../style"
import {logo} from "../assets"
import {footerLinks, socialMedia} from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex-col justify-start flex">
        <img
        src={logo}
        className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>

      </div>

      <div className="flex-[1.5] flex w-full flex-wrap flex-row justify-between md:mt-0 mt-10">
        {footerLinks.map((footerlink)=>(
          <div key={footerlink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
           <h4 className=" font-poppins mb-2 font-medium text-[18px] leading-[27px] text-white">{footerlink.title}</h4>
           <ul>
            {footerlink.links.map((Link,index)=>(
              <li key={Link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !==footerlink.links.length -1 ? 'mb-4' :'mb-0'}`}>{Link.name}</li>
            ))}
           </ul>

          </div>
        ))}
      </div>

    </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]" >
          <p className="font-poppins  font-normal text-[18px] text-center leading-[27px] text-white">2024 HooBank. All Rights Reserved.</p>
          <div className="flex flex-row md:mt-0 mt-6">
            {
              socialMedia.map((media,index)=>(
                <img
                key={media.id}
                src={media.icon}
                alt={media.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`}
                />
              ))
            }
          </div>
        </div>
  </section>
)

export default Footer
