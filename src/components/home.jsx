import {Navbar, Container, Nav} from "react-bootstrap";

const home = () => {
  return (
    <div>
     <div>
      <section className="hero-container">
        <div>
          <div>
            <h1>Dashboard Water Sensor</h1>
            <p>Aplikasi untuk Pelampung pendeteksi kadar air sungai</p>
            <br />
            <p><a href="login" className="tbl-mulai">LOGIN</a></p>
          </div>
        </div>
        <img src="./public/HERO.svg" alt="hero" />
      </section>
    </div>
    </div>
  );
}

export default home