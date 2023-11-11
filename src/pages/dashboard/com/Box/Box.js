import React from 'react';
import Img from '../../../../static/img.png';
import './box.css';
import { Button, Form } from 'react-bootstrap';

function Box() {
  return (
    <div className="banner">
      <div className="bg-banner-wrapper">
        <img className="bg-banner" src="https://t4.ftcdn.net/jpg/03/16/36/59/360_F_316365913_WKVKZW7gzsqqhkx4PgGyu0rArj5GykHK.jpg" alt="" />
      </div>
      <div className="container banner-contents">
        <div className="row">
          <div className="col-lg-2">
            {/* Add content if needed */}
          </div>
          <div className="col-lg-8">
            <h3 className='center-text'>Thinking to sell your home?</h3>
            <p className="center-p">Get an instant estimate of your home's value. <br />You can quickly determine the estimated value of your home by answering a few quick questions.</p>

            <div className="formz">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
            </div>

            <a href='/register' className='mt-3 btn btn-primary  center-button' variant="info">Get free estimate</a>
          </div>
        </div>
      </div>
      <img className="banner-rectangle" alt="Rectangle" src={Img} />
    </div>
  );
}

export default Box;
