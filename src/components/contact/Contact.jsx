import React from 'react'
import './contact.scss';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="footer">
        <div className="container">
          <div className="footerTxt">
            <div className="title">
              <i class="bi bi-geo-alt"></i>
              <h4>آدرس</h4>
            </div>
            <div className="body">
              <p>  تهران - خیابان سهروردی شمالی - </p>
              <p>خیابان شهید قندی - کوچه سوم - واحد 11 - </p>
            </div>
          </div>
          <div className="footerTxt">
            <div className="title">
              <i class="bi bi-geo-alt"></i>
              <h4>راه های ارتباطی</h4>
            </div>
            <div className="body">
              <p>تلفن: 0987654321</p>
              <p>ایمیل:test@gmail.com</p>
            </div>
          </div>
          <div className="footerTxt">
            <div className="title">
              <i class="bi bi-geo-alt"></i>
              <h4>ساعات کار</h4>
            </div>
            <div className="body">
              <p>شنبه تا 5 شنبه : 9صبح تا 6 عصر</p>
              <p>جمعه : تعطیل</p>
            </div>
          </div>
          <div className="footerTxt">
            <div className="titleIcon">
              <h6> ما را در شبکه های اجتمایی دنبال کنید</h6>
            </div>
            <div className="icon">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-telegram"></i>
            <i class="bi bi-google"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <h6>© Copyright Aspak. All Rights Reserved</h6>
          <p> Designed by HoomanFarzaneh</p>
        </div>
      </div>
    </div>
  )
}

export default Contact