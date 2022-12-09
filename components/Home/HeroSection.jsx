import Container from "../Container"

const HeroSection = () => {
  return (
    <section className="h-[630px] bg-[#121212]/70">
        <Container className='!p-10 flex flex-col h-full gap-4 items-center justify-end !pb-[120px] text-white'>
            <p 
            style={{ fontFamily: 'Marcellus'}}
            className="uppercase text-lg leading-7 tracking-[0.25em]">iNTRODUCING</p>
            <h1>Custom Enquiry</h1>
            <p className="underline font-medium leading-5 text-xl tracking-[0.15px]">Start Now</p>
        </Container>
    </section>
  )
}

export default HeroSection