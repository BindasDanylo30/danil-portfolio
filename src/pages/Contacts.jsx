const Contacts = () => {
  return (
    <div className="container conteiner_contact">
      <h1 className="title-1">Contacts</h1>

      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-2">Location</h2>
          <p>Kyiv, Ukraine</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+79051234567">+38 068-92-20-224</a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Email</h2>
          <p>
            <a href="mailto:webdev@protonmail.com">danilbindas@gmail.com</a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
