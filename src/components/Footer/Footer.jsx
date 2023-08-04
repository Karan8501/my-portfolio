import './footer.css';
const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="text-box">
        <p className="text">
          Kc {date.getFullYear()} —{' '}
          <a target="_blank" href="https://github.com/karan8501" className="external-link">
            Designed & Coded by karan and inspired by rwxdan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
