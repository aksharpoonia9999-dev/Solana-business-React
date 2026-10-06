import HeroImg from "../assets/hero-bg.webp"


const SectionOne = () => {
  return (
    <section className="min-h-fit xl:min-h-87">
      <img width="1920" height="333" className="object-cover w-full xl:h-87" src={HeroImg} alt="hero-bg" />
    </section>
  )
}

export default SectionOne
