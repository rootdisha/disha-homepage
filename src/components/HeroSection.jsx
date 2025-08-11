import DishaLogo from "/src/assets/disha-logo copy.svg";

export default function HeroSection() {

  return (
    <section className=" relative min-h-screen">
      {/* Nav bar */}
      <nav className="navbar flex font-lato font-bold items-center justify-between px-4 py-6">
      {/* Sticky Navigation Bar */}
      {/* <nav className="navbar fixed font-lato font-bold top-0 left-0 w-full bg-secondary bg-opacity-95 backdrop-blur-md z-50 flex items-center justify-between px-8 py-4 shadow-md"> */}
        {/* Logo */}
        <div className="text-sm tracking-wider">
          <img src={DishaLogo} alt="Disha Logo" className="w-32 h-auto mb-6 " />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#work" className="hover:text-primary transition-colors">
            Our Work
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-primary 
                     hover:bg-black 
                     text-black 
                     hover:text-secondary 
                     px-5 
                     py-2 
                     rounded-full 
                     font-semibold 
                     transition-colors"
        >
          Get in Touch
        </a>
      </nav>

      <div className="section flex flex-col justify-center items-center text-left px-6 mt-4">
        <h1 className="text-9xl md:text-9xl font-bold uppercase">
            <span className="animate-item statement">Creative.</span><br/>
            <span className="animate-item statement text-primary">Impactful.</span><br/>
            <span className="animate-item statement">Directional.</span><br/>
          
        </h1>
        {/* <p className="mt-6 text-lg text-primary">
          <span className="bg-primary text-secondary"> Disha Medias.</span> We Create <span className="text-primary">Impact </span>  
          That Lasts
        </p> */}
      </div>

   
    </section>
  );
}