import DishaLogo from "/src/assets/disha-logo copy.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Nav bar */}
      <nav className="flex items-center justify-between px-4 py-6">
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
    </div>
  );
}
