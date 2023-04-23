import Carousel from 'react-bootstrap/Carousel';
import "./Carousel_style.css"
function Carousels() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          src="https://www.daiict.ac.in/sites/default/files/2021-04/Campus%2051.JPG"
          alt="First slide"
          style={{ width: '100%', height: '93vh' }} 
        />
        <Carousel.Caption>
          <h3>First</h3>
          <p>HOR Men</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.daiict.ac.in/sites/default/files/2021-04/Campus%2033.JPG"
          alt="Second slide"
          style={{ width: '100%', height: '93vh' }} 
        />

        <Carousel.Caption>
          <h3>Second</h3>
          <p>New HOR Men</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.daiict.ac.in/sites/default/files/2021-04/Campus%2028.JPG"
          alt="Third slide"
          style={{ width: '100%', height: '93vh' }} 
        />

        <Carousel.Caption>
          <h3>Third</h3>
          <p>
            New HOR Men
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.pagalguy.com/wp-content/uploads/2018/10/07F1889D1068067F.jpg"
          alt="Fourth slide"
          style={{ width: '100%', height: '93vh' }} 
        />

        <Carousel.Caption>
          <h3>Fourth</h3>
          <p>
            Hostel Top
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://static.zollege.in/public/college_data/images/campusimage/1440673033777.PNG"
          alt="Fifth slide"
          style={{ width: '100%', height: '93vh' }} 
        />

        <Carousel.Caption>
          <h3><a>Fifth</a></h3>
          <p>
            HOR Women
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
  
}

export default Carousels;