import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <img
        className='home_image'
        src="/car.jpg"
        alt='hehe'
        />
        {/* product id, title, price, rating, image */}
        <div className='home_row'>
        <Product
                  id="1001"
                  title="Ford Mustang GT sports, 600 horsepower,  cylinder deactivation and active exhaust system"
                  price={1000}
                  rating={5}
                  image="/e1.jpeg">
        </Product>
        {/* product */}
        <Product
                  id="1002"
                  title="Chevrolet Camaro SS sports car engine, 550 horsepower,  miles, variable camshaft timing, forged pistons, and a lightweight crankshaft"
                  price={1000}
                  rating={5}
                  image="/e6.jpeg">
        </Product>
        {/* product */}
        </div>

        <div className='home_row'>
        <Product
                  id="1003"
                  title="Audi R8 engine boasting 575 horsepower, 6,500 miles on the clock, dual overhead camshaft design, high-flow fuel injectors, and electronically controlled turbo wastegates."
                  price={1000}
                  rating={5}
                  image="/e10.jpeg">
        </Product>
        {/* product */}
        <Product
                  id="1004"
                  title="Chevrolet Corvette Z06 engine, 520 horsepower, driven for 7,000 miles, lightweight aluminum block, dual VVT-i, and a sequential multi-point fuel injection system."
                  price={1000}
                  rating={5}
                  image="/e4.jpeg">
        </Product>
        <Product
                  id="1005"
                  title="Dodge Challenger Hellcat sports car engine, 750 horsepower, 1,200 miles, forged steel crankshaft, dry-sump lubrication, and an active exhaust bypass."
                  price={1000}
                  rating={5}
                  image="/e7.jpeg">
        </Product>
        {/* product */}
        </div>

        <div className='home_row'>
        {/* product */}
        <Product
                  id="1006"
                  title="McLaren 720S engine boasting 800+ horsepower, 2,000 miles, twin-scroll turbocharger, integrated exhaust manifold, and an adaptive performance traction management system."
                  price={1000}
                  rating={5}
                  image="/e9.jpeg">
        </Product>
        <Product
                  id="1007"
                  title="Ferrari 488 GTB, generates 525 horsepower, mileage of 3,500 miles, cylinder deactivation, electric water pump, and a track-tuned performance calibration."
                  price={1000}
                  rating={5}
                  image="/e8.jpeg">
        </Product>
        {/* product */}
        </div>

    </div>
  )
}

export default Home