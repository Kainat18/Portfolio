import { motion } from "framer-motion";

function About() {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 1 },
  };
  return (
    <div id="about-section">
      <h2 className="about-header">A Little Bit About Me</h2>
      <div className="about-description">
        <p className="description-1">
        Hello! 👋 I’m Kainat Farooq, a developer with a passion for creating engaging, user-friendly experiences and writing clean, efficient code. Proficient in front-end technologies like HTML, CSS, JavaScript, and ReactJS, I’ve also gained hands-on experience in backend development. I embrace modern tools and frameworks, continuously learning to deliver innovative and impactful solutions.{" "}
        </p>
        <p className="description-2">
          Always willing to collaborate, engage in fresh discussions, and take
          on new opportunities and challenges. Feel free to reach out using{" "}
          <a href="mailto:kainatfarooqmunara@gmail.com" target="_blank">
            Email
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/kainat-farooq-6097b21b3/"
            target="_blank"
          >
            Linkedin
          </a>{" "}
          and{" "}
          <a href="https://github.com/Kainat18" target="_blank">
            Github
          </a>
          .
        </p>

        <a
          href="https://drive.google.com/file/d/1PgYTSTmyl2tJFTmLdA_HkFay_x9Wj9qT/view?usp=sharing"
          target="_blank"
          className="resume-link"
        >
          <motion.button
            className="Resume-btn"
            role="link"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Resume
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default About;


