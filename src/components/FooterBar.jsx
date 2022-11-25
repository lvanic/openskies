import { useNavigate } from "react-router-dom";

function FooterBar()
{
  const navigate = useNavigate();
    return(
        <footer className="footer" style={{marginTop:'5px'}}>
      <div className="wrapper">
        <ul className="ul_items">
          <li><a onClick={() => navigate('/')}>Главная</a></li>
          <li><a className="btn_app" onClick={() => navigate('/countries')}>Куда поехать</a></li>
          <li><a className="btn_about_us" onClick={() => navigate('/about-us')}>О нас</a></li>
          <li><a onClick={() => navigate('/rules')}>Дополнительные услуги</a></li>
          <li className="mobile_response">
            8(029)7292215 <br />
            внутренние рейсы
            <div className="line"></div>
          </li>
          <li>© 2022, ООО «OpenSkies»</li>
        </ul>
        <div className="additional">
          <p className="title_add">Справочная информация</p>
          <div className="footer_contancts">
            <p className="phone">8(029)7292215 внутренние рейсы</p>
            <div className="line"></div>
            <p className="phone">8(029)7254495 международные рейсы</p>
          </div>
          <p className="adress">support@Maksimair.ru</p>
        </div>
        <div className="icons">
          <div className="icon">
            <div className="imgs_icons hidden_logo">
              <a
                href="https://console.firebase.google.com/u/0/project/chat-a3c69/authentication/users"
              >
                <img src="IMG/icon/Twitter.svg" alt="Twitter"
              /></a>
            </div>
            <div className="imgs_icons">
              <a href="https://www.instagram.com/">
                <img src="IMG/icon/Instagram.svg" alt="Instagram" />
              </a>
            </div>
            <div className="imgs_icons hidden_logo">
              <a href="https://www.viber.com/ru/">
                <img src="IMG/icon/Viber.svg" alt="Viber" />
              </a>
            </div>
            <div className="imgs_icons">
              <a href="https://vk.com/feed">
                <img src="IMG/icon/VK.svg" alt="VK" />
              </a>
            </div>
            <div className="imgs_icons hidden_logo">
              <a href="https://telegram.im">
                <img src="IMG/icon/Telegram.svg" alt="Telegram" />
              </a>
            </div>
            <div className="imgs_icons">
              <a href="https://ok.ru/">
                <img src="IMG/icon/Ok.svg" alt="OK" />
              </a>
            </div>
            <div className="imgs_icons hidden_logo">
              <a href="https://www.linkedin.com/">
                <img src="IMG/icon/LinkedIn.svg" alt="LinkedIn" />
              </a>
            </div>
            <div className="imgs_icons">
              <a href="https://www.facebook.com/">
                <img src="IMG/icon/Facebook.svg" alt="Facebook" />
              </a>
            </div>
            <div className="imgs_icons hidden_logo">
              <a href="https://mail.google.com/"
                ><img src="IMG/icon/Mail.svg" alt="Mail" />
              </a>
            </div>
          </div>
          <p className="phone_img">8(029)7254495 международные рейсы</p>
        </div>
      </div>
    </footer>
    );
}

export default FooterBar;