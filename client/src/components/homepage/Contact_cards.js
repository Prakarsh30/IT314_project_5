import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Contact_cards.css"

const Contact_cards = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = [
    // {
    //   name: 'John Doe',
    //   image: 'https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300',
    //   occupation: 'Web Developer',
    //   location: 'San Francisco, CA'
    // },
    // {
    //   name: 'Jane Smith',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdj-JFD7NhEh28prosMk0MAS0CbFzX5re8A&usqp=CAU',
    //   occupation: 'UX Designer',
    //   location: 'New York, NY'
    // },
    // {
    //   name: 'Bob Johnson',
    //   image: 'https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300',
    //   occupation: 'Marketing Manager',
    //   location: 'Chicago, IL'
    // },
    {
        image:'https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300',
        name:'Prof. Bakul Gohel',
        occupation:'Warden, HOR-Men',
        email:'warden_men@daiict.ac.in',
        phone_no:'079-68261672 (Off.), 9328888966 (M)',
        
    },
    {
        image:'https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300',
        name:'Emma A. Main',
        occupation:'Graphics Designer',
        email:'PaulGoyette@gmail.com',
        phone_no:'000 123-456',
        
    },
    {
        image:'https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300',
        name:'Emma A. Main',
        occupation:'Graphics Designer',
        email:'PaulGoyette@gmail.com',
        phone_no:'000 123-456',
        
    }
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width: "100%", height: "46.5vh"}}>
      {items.map((item, idx) => (
        <Carousel.Item key={idx}>
          {/* <img
            className="d-block w-100"
            src={item.image}
            alt={item.name}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.occupation} - {item.location}</p>
          </Carousel.Caption> */}
          <div className="contact_card">
        <div className="card-header">
          <img className="profile-image" src={item.image} alt={item.name} />
          <div className="profile-info">
            <h4>{item.name}</h4>
            <h5>{item.occupation}</h5>
          </div>
        </div>
        <div className="card-body">
          <p className="contact-info"><strong>Email:</strong> {item.email}</p>
          <p className="contact-info"><strong>Phone:</strong> {item.phone_no}</p>
        </div>
      </div>
        </Carousel.Item>

        
      ))}
    </Carousel>
  );
};

export default Contact_cards;