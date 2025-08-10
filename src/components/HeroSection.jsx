import DishaLogo from "/src/assets/disha-logo copy.svg";


export default function HeroSection() {
    return (
      <section className="section relative min-h-screen">
        {/* Nav bar */}
        <nav className="flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
             <img
              src={DishaLogo}
              alt="Disha Logo"
              className="w-80 h-auto mb-6 " 
            />
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
            className="bg-primary hover:bg-black text-black hover:text-secondary px-5 py-2 rounded-full font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        <div className="flex flex-col justify-center items-center text-left px-6">
          <h1 className="text-9xl md:text-9xl font-bold uppercase">
              Creative.<br/>
              <span className="text-primary">Impactful.</span><br/>
              Directional.<br/>
            
          </h1>
          {/* <p className="mt-6 text-lg text-primary">
            <span className="bg-primary text-secondary"> Disha Medias.</span> We Create <span className="text-primary">Impact </span>  
            That Lasts
          </p> */}
        </div>

     
      </section>
    );
  }
  