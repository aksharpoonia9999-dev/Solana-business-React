import AboutImg from "../assets/about.webp"

const SectionThree = () => {
  return (
    <section className = "bg-light-yellow min-h-fit px-4 w-full xl:min-h-138.5">
    <div className="container max-w-330 w-full mx-auto">
        <div className="row w-full flex items-center justify-center min-[1140px]:justify-between gap-y-7.5 gap-x-5 flex-wrap min-[1140px]:flex-nowrap">
            <div className="left max-w-147.75 w-full xl:h-105.25 h-auto">
                <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-150 text-black">It was popularised</h1>
                <p className="sm:text-lg text-base leading-[180%] text-black/80">Have you heard? We’re hiring! We have 3,333 working positions to <br className="hidden min-[1140px]:block" /> fill on the Solana blockchain. Once all positions are filled it’s <br className="hidden min-[1140px]:block" /> crucial to stay on your toes because the corporate penguins are <br className="hidden min-[1140px]:block" /> coming! Any penguins caught chilling on the floor when <br className="hidden min-[1140px]:block" /> corporate arrives will be immediately fired and swept away! This <br className="hidden min-[1140px]:block" /> makes SFFB a deflationary collection until we reach a maximum <br className="hidden min-[1140px]:block" /> staff of 1,666 mcnoots in total.</p>
                <button className="discover-btn max-w-54.75 w-full font-roboto bg-red h-13.25 mt-[clamp(28px,5vw,48px)] text-white leading-120 rounded-[10px] border border-solid border-transparent hover:border-red cursor-pointer hover:bg-yellow transition-all duration-300 ease-in-out hover:text-black text-base sm:text-xl font-medium">DISCOVER MORE</button>
            </div>
            <div className="right max-w-134 w-full">
                <img width="536" height="554" className="object-cover" src={AboutImg} alt="about image" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default SectionThree
