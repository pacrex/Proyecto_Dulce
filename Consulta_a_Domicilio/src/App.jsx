import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./App.css";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("mision");

  // Contenido para cada sección
  const sections = {
    mision: (
      <div>
        <h2>Misión</h2>
        <p>
          Proveer servicios médicos de calidad a domicilio, mejorando la calidad de vida de
          nuestros pacientes con atención personalizada y oportuna.
        </p>
      </div>
    ),
    vision: (
      <div>
        <h2>Visión</h2>
        <p>
          Ser el líder en servicios de consulta médica a domicilio, utilizando tecnologías
          innovadoras para conectar a pacientes con profesionales de la salud.
        </p>
      </div>
    ),
    valores: (
      <div>
        <h2>Valor</h2>
        <p>
          Ofrecemos conveniencia, rapidez y cuidado personalizado en la comodidad del hogar.
        </p>
      </div>
    ),
    segmentos: (
      <div className="segmentos-container">
        <Swiper navigation spaceBetween={10} slidesPerView={1} className="swiper">
          <SwiperSlide>
            <div className="segment">
              <h2>Segmento 1</h2>
              <p>Personas mayores que requieren atención médica constante.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="segment">
              <h2>Segmento 2</h2>
              <p>Pacientes con movilidad reducida.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="segment">
              <h2>Segmento 3</h2>
              <p>Familias que buscan conveniencia y evitar desplazamientos innecesarios.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    ),
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Consulta a Domicilio</h1>
      </header>

      <div className="main-content">
        {/* Menú lateral */}
        <nav className="menu">
          <button
            className={selectedMenu === "mision" ? "active" : ""}
            onClick={() => setSelectedMenu("mision")}
          >
            Misión
          </button>
          <button
            className={selectedMenu === "vision" ? "active" : ""}
            onClick={() => setSelectedMenu("vision")}
          >
            Visión
          </button>
          <button
            className={selectedMenu === "valores" ? "active" : ""}
            onClick={() => setSelectedMenu("valores")}
          >
            Valor
          </button>
          <button
            className={selectedMenu === "segmentos" ? "active" : ""}
            onClick={() => setSelectedMenu("segmentos")}
          >
            Segmentos
          </button>
        </nav>

        {/* Contenido dinámico */}
        <section className="content">{sections[selectedMenu]}</section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Consulta a Domicilio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
