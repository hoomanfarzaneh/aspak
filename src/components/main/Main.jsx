import './main.scss'
import {init} from 'ityped'
import { useEffect, useRef } from 'react';

const Main = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: ["آسانسور", "پله برقی", "بالابرهای صنعتی"]
    });
  }, []);
  
  return (
    <div className='main' id='main'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src='https://images.pexels.com/photos/5733814/pexels-photo-5733814.jpeg?auto=compress&cs=tinysrgb&w=2000' alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src='https://images.pexels.com/photos/7291311/pexels-photo-7291311.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=1' alt=""/>
            <div class="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src='https://images.pexels.com/photos/8453040/pexels-photo-8453040.jpeg?auto=compress&cs=tinysrgb&w=2000' alt=""/>      
            <div class="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="typedMain">
        <h1>شرکت مهندسی آسپک</h1>
        <h2>با ۱۵ سال سابقه درخشان</h2>
        <h3>نصب و تعمیر ونگهداری <span ref={textRef}></span></h3>
        <h2>پشتیبانی 24 ساعته</h2>
      </div>
    </div>
  )
}
export default Main