

export default function ContactSection() {
    return (
      <section className="section min-h-screen flex flex-col justify-center items-center px-6">
        <h2 className="text-9xl font-bold mb-4 text-primary uppercase">Let’s Talk</h2>
        <p className="mb-6">Got a project? We’d love to hear from you.</p>
        <a
          href="mailto:hello@disha.com"
          className="bg-primary text-secondary px-6 py-3 rounded-full "
        >
          Contact Us
        </a>
      </section>
    );
  }
  