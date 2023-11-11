import React from 'react'
import './product.css'
import Image1 from '../../../../static/productsimg/img1.png'
import Image2 from '../../../../static/productsimg/img2.png'

import Image3 from '../../../../static/productsimg/img3.png'
import Image4 from '../../../../static/productsimg/img4.png'

function Product() {
  return (
    <div>

        <div className="container-fluid products_container">
            <div className="row mt-5">
               <div className="col-lg-3 ">

                <img src={Image2} alt="" />
                <h3 className='products_heading mt-4'>Visiblity</h3>
                <p className="text-warper">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo distinctio magni officia iusto ab architecto facilis ipsa inventore? Libero consectetur atque iste adipisci voluptatibus cupiditate cum laboriosam qui alias?
                    Veritatis omnis quia dolor ab id reprehenderit esse nam iure, fugit quisquam, quasi nisi perferendis velit. Mollitia labore minima ea qui cumque consequatur ullam, voluptates laboriosam fuga nihil similique nulla?
                    Aspernatur beatae minus eos temporibus illo. Deleniti accusantium non officiis aliquid voluptatem ipsum quibusdam accusamus delectus facere quod, molestiae ullam alias. Molestiae nobis consequatur laborum dolores nihil neque sequi qui?
                </p>

               </div>


               <div className="col-lg-3">
               <img src={Image3} alt="" />
               <h3 className='products_heading mt-4'>RealLocalAgents</h3>
               <p className="text-warper">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo distinctio magni officia iusto ab architecto facilis ipsa inventore? Libero consectetur atque iste adipisci voluptatibus cupiditate cum laboriosam qui alias?
                    Veritatis omnis quia dolor ab id reprehenderit esse nam iure, fugit quisquam, quasi nisi perferendis velit. Mollitia labore minima ea qui cumque consequatur ullam, voluptates laboriosam fuga nihil similique nulla?
                    Aspernatur beatae minus eos temporibus illo. Deleniti accusantium non officiis aliquid voluptatem ipsum quibusdam accusamus delectus facere quod, molestiae ullam alias. Molestiae nobis consequatur laborum dolores nihil neque sequi qui?
                </p>


               </div>
               <div className="col-lg-3">
               <img src={Image4} alt="" />
               <h3 className='products_heading mt-4'>Emil & Notifications</h3>
               <p className="text-warper">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo distinctio magni officia iusto ab architecto facilis ipsa inventore? Libero consectetur atque iste adipisci voluptatibus cupiditate cum laboriosam qui alias?
                    Veritatis omnis quia dolor ab id reprehenderit esse nam iure, fugit quisquam, quasi nisi perferendis velit. Mollitia labore minima ea qui cumque consequatur ullam, voluptates laboriosam fuga nihil similique nulla?
                    Aspernatur beatae minus eos temporibus illo. Deleniti accusantium non officiis aliquid voluptatem ipsum quibusdam accusamus delectus facere quod, molestiae ullam alias. Molestiae nobis consequatur laborum dolores nihil neque sequi qui?
                </p>



               </div>
               <div className="col-lg-3">

               <img src={Image1} alt="" />
               <h3 className='products_heading mt-4'>Professional photos</h3>
               <p className="text-warper">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo distinctio magni officia iusto ab architecto facilis ipsa inventore? Libero consectetur atque iste adipisci voluptatibus cupiditate cum laboriosam qui alias?
                    Veritatis omnis quia dolor ab id reprehenderit esse nam iure, fugit quisquam, quasi nisi perferendis velit. Mollitia labore minima ea qui cumque consequatur ullam, voluptates laboriosam fuga nihil similique nulla?
                    Aspernatur beatae minus eos temporibus illo. Deleniti accusantium non officiis aliquid voluptatem ipsum quibusdam accusamus delectus facere quod, molestiae ullam alias. Molestiae nobis consequatur laborum dolores nihil neque sequi qui?
                </p>

               </div>
            </div>
        </div>
        </div>
  )
}

export default Product