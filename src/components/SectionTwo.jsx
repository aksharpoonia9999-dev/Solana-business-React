import BurgersImg from "../assets/burgers.png"
import LogoImg from "../assets/open.webp"

const SectionTwo = () => {
  return (
    <section className="xl:min-h-125.75 w-full h-auto px-4">
      <div className=" relative">
        <img width="1920" height="413" className=" absolute -z-10" src={BurgersImg} alt="burger-images" />
        <div className="container max-w-201.5 w-full mx-auto">
        <div className="row w-full md:pt-18.25 pt-15">
            <h1 className="heading text-black font-bold text-center text-[clamp(20px,6vw,36px)]">WELCOME TO</h1>
            <div className="max-w-201.5 w-full">
                <img width="806" height="351" className=" object-cover mt-[clamp(16px,6vw,27px)]" src={LogoImg} alt="Logo-img" />
            </div>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default SectionTwo
