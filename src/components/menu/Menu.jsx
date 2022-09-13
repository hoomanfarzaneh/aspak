import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
          <li onClick={()=> setMenuOpen(false)}> 
            <i class="bi bi-house-fill" ></i>
            <a href='#main'>صفحه اصلی</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
            <i class="bi bi-chevron-bar-contract"></i>
             <a href='#about'>درباره شرکت  </a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
            <i class="bi bi-award"></i>
            <a href='#service'>خدمات</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
             <i class="bi bi-kanban-fill"></i>
            <a href='#project'>پروژه ها</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
            <i class="bi bi-headset"></i>
            <a href='#service'>ارتباط با ما</a>
          </li>
          <li> 
            <hr />
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
            <span><i class="bi bi-instagram"></i></span>
            <span><i class="bi bi-whatsapp"></i></span>
            <span><i class="bi bi-telegram"></i></span>
          </li>
      </ul>
  </div>;
}