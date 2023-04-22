import Carousel from 'react-bootstrap/Carousel';
import "./Carousel_style.css"
function Carousels() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          src="https://www.hindustantimes.com/ht-img/img/2023/04/12/1600x900/IMAGE_1679302987_1681265098418_1681265105760_1681265105760.jpg"
          alt="First slide"
          style={{ width: '100%', height: '90vh' }} 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.hindustantimes.com/ht-img/img/2023/04/05/1600x900/Demon_slayer_season_2_recap_1680711861129_1680711892122_1680711892122.png"
          alt="Second slide"
          style={{ width: '100%', height: '90vh' }} 
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/demon-slayer-season-3-poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          alt="Third slide"
          style={{ width: '100%', height: '90vh' }} 
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
  
}

export default Carousels;