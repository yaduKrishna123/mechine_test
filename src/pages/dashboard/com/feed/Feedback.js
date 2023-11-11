import React from 'react'
import './feed.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';

function Feedback() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768, // Adjust the breakpoint as needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024, // Adjust the breakpoint as needed
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true
              
            },
          },
        ]
      };
  return (
    <div>


        <div className="container-fluid box2">
                <h2 className="heading_tex">
                    The canidan Home
                </h2>

                <h5 className="heading_text2">
                    what customers says about the Canadian Home experience
                </h5>
<div className="mt-5">
<Slider {...settings}>
      <div>

      <Card style={{ width: '18rem' }}><i className="fa-solid fa-quote-left" style={{color:'blue',fontSize:'30px'}}></i>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.<i className="fa-solid fa-quote-right" style={{color:'blue',fontSize:'30px',float:'right'}}></i>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card style={{ width: '18rem' }}><i className="fa-solid fa-quote-left" style={{color:'blue',fontSize:'30px'}}></i>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.<i className="fa-solid fa-quote-right" style={{color:'blue',fontSize:'30px',float:'right'}}></i>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

      </div>
      <div>
      <Card style={{ width: '18rem' }}><i className="fa-solid fa-quote-left" style={{color:'blue',fontSize:'30px'}}></i>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <i className="fa-solid fa-quote-right" style={{color:'blue',fontSize:'30px',float:'right'}}></i>  
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>
      <div>
      <Card style={{ width: '18rem' }}><i className="fa-solid fa-quote-left" style={{color:'blue',fontSize:'30px'}}></i>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.<i className="fa-solid fa-quote-right" style={{color:'blue',fontSize:'30px',float:'right'}}></i>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

      </div>
      <div>
      <Card style={{ width: '18rem' }}><i className="fa-solid fa-quote-left" style={{color:'blue',fontSize:'30px'}}></i>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.<i className="fa-solid fa-quote-right" style={{color:'blue',fontSize:'30px',float:'right'}}></i>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

      </div>
     
    </Slider>
</div>
          
        </div>

        <div className="">
            <p className='yadu'>Copyright &copy; 2023 The Canadian Home Realty Inc.</p>
        </div>
    </div>
  )
}

export default Feedback