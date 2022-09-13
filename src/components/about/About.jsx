import React from 'react'
import './about.scss'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="aboutSec">
        <div className="aboutTxt">
          <h1>درباره ما</h1>
          <p>شرکت آسانسور sumex با رویکرد سه اصل: جلب اعتماد مشتری، همگام بودن با تکنولوژی روز و بهره گیری از کارشناسان حرفه ای تشکیل شده است و به صورت تیمی یکپارچه فعالیت می کند.</p>
          <p>تجربه مدیران و کارشناسان در داخل کشور و صحنه های بین المللی در طراحی و اجرای پروژه های خاص دلیلی بر رسیدن به اهداف این شرکت است. ما با اجرای انواع پروژه های مسکونی، اداری - تجاری و ورزشی، پروژه های MRL، آسانسورهای با سرعت ۲.۵ متر بر ثانیه و ... آرامش و کیفیت را به عنوان برگ زرینی در کارنامه افتخارات خود داشته ایم.</p>
          <p>از اهداف کلیدی گروه sumex می توان به ایجاد و مدیریت زنجیره تامین از تهیه منابع اولیه تا خدمات پشتیبانی نام برد و در نظر داریم تا با حضور چشمگیر در عرصه های مختلف نصب و راه اندازی آسانسور، کیفیت برتر و خدماتی بهتر نسبت به سایر رقبا به عنوان بک برند برتر و الگو در سطح کشور مطرح و مستدام باشیم.</p>
        </div>
        <div className="aboutImg">
          <img className='pic1' src='https://images.pexels.com/photos/6249432/pexels-photo-6249432.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
          <img className='pic2' src='https://images.pexels.com/photos/6249432/pexels-photo-6249432.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
      </div>
    </div>
  )
}

export default About