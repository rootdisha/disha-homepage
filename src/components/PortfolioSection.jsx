

export default function PortfolioSection() {
    return (
      <section className="section min-h-screen flex flex-col justify-center items-center px-6" id="work">
        <h2 className="text-8xl  mb-4 text-primary uppercase">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-black text-secondary p-4 rounded-lg">Project 1</div>
          <div className="bg-black text-secondary p-4 rounded-lg">Project 2</div>
          <div className="bg-black text-secondary p-4 rounded-lg">Project 3</div>
        </div>
      </section>
    );
  }
  