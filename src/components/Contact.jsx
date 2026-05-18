export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <h2>Let's Connect</h2>

        <p>
          Interested in working together or just want to say hi?
        </p>
        <div className="contact-links">

          
            <a
              className="contact-row"
              href="mailto:henna.rajakisto@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="/img/email-icon.webp" alt="GitHub" />
                <div>
                  <h4>Email</h4>
                  <span>henna.rajakisto@gmail.com</span>

                </div>
              </div>
            </a>
          
          <a
            className="contact-row"
            href="https://github.com/hennamarleena"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="/img/github-icon.png" alt="GitHub" />
              <div>
                <h4>GitHub</h4>
              </div>
            </div>
          </a>

          <a
            className="contact-row"
            href="https://www.linkedin.com/in/henna-rajakisto-b57b99253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="/img/linkedin-square-icon.png" alt="LinkedIn" />
              <div>
                <h4>LinkedIn</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}