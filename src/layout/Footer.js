const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>kdh516094@gmail.com</p>
        <p>+82 (010) 7464 1533</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Thegirlwholeaptthroughtime?tab=repositories"
          >
            <span className="icon fab fa-github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/thegirlwholeaptthrought/"
          >
            <span className="icon fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
