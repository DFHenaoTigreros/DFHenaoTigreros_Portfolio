import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {container, container2, image, containerImage, containerText} from "./styles";
import imagen from "../../assets/photo.png"

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <Slider {...settings} style={container}>
      <div>
        <div style={container2}>
          <div style={containerImage}>
            <img src={imagen} alt="David_Henao" style={image} />
          </div>
          <div style={containerText}>
            <p>I am a Full Stack Developer young Colombian man, very responsible and disciplined. I love sports and I have a passion to computing, I love studying all time, I have the ability to adapt quickly to circumstances and get knowledges very fast, I like to meet people and I always try to help them, I prefer to give than receive.</p>
          </div>
        </div>
      </div>
      <div>
        <div style={container2}>
          <h2>Technical Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>ExpressJs</li>
            <li>PostgreSQL</li>
            <li>NodeJs</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <div>
        <div style={container2}>
          <h2>Soft Skills</h2>
          <ul>
            <li>Perseverance</li>
            <li>Emotional Intelligence</li>
            <li>Resilence</li>
            <li>Scrum</li>
            <li>Agile Mindset</li>
            <li>Agile Methodologies</li>
            <li>Empathy</li>
          </ul>
        </div> 
      </div>
    </Slider>
  );
};

export default Carrousel;