import logo from "../assets/mio_logo.png"

export default function Footer() {

    return (
        <footer>
            <section className="footer_left">
                <img src={logo} alt="logo personale" className="logo" />
            </section>

            <section className="footer_right">
                <a href="https://github.com/VincenzoLivigni" target="_blank" rel="noreferrer">
                    <i className="bi bi-github"></i>
                </a>

                <a href="https://https://www.linkedin.com/in/vincenzo-livigni-2206b83a9/.linkedin.com/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
            </section>
        </footer>
    )
}