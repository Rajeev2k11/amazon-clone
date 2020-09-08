import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
    return (
        <div className="home">
          <img
            className="home_img"
            src="https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/02/14/Pictures/_6358bc34-302e-11e9-8baa-80fb3b94486c.jpg"
            alt="Prime video"
          >
          </img>  
          <div className="home_row">
            <Product 
              id="1"
              title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)"
              price={649}
              rating={4}
              image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-5.jpg"
            />
            <Product 
            id="2"
            title="Levi's 
            Graphic Print Men Round Neck White T-Shirt
            "
            price={798}
            rating={4}
            image="https://rukminim1.flixcart.com/image/880/1056/jx257680/t-shirt/3/5/v/m-16960-0060-levi-s-original-imafhm4kwdwzymwx.jpeg?q=50"
            />
          </div>
          <div className="home_row">
            <Product 
              id="1"
              title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)"
              price={649}
              rating={4}
              image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-5.jpg"
            />
            <Product 
            id="1"
            title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)"
            price={649}
            rating={4}
            image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-5.jpg"
          />
            <Product 
            id="1"
            title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)"
            price={649}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61oepq-POLL._AC_UX385_.jpg"
          />
          </div>
          
          
        </div>
    )
}

export default Home
