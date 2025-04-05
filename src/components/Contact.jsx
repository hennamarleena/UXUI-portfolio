import { Image } from "@mantine/core";

export default function Contact() {

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div>
        <Image
          radius="0"
          src={"/img/contact-img-sm.png"}
          alt="decorative image"
        />
      </div>

      <div className="contact-text">
        <h2>Contact</h2>
        <h3>Email</h3>
        <p>sa22889@student.samk.fi</p>
        <div className="contact-icons-flex">
        <a href="https://github.com/hennamarleena"><img src="/img/github-icon.png" alt="github icon" className="icon" /></a>
        <a href="https://www.linkedin.com/in/henna-rajakisto-b57b99253/"><img src="/img/linkedin-square-icon.png" alt="linkedin icon" className="icon" /></a>
        </div>
      </div>
    </section>
  );
}
