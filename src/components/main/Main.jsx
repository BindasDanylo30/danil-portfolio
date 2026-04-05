import './Main.scss';
const Main = () => {
  return (
    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item ">
  <h2 className="title-2">About me</h2>
  
  <p>
    Frontend-розробник (React, TypeScript) із 1.5+ роками комерційного досвіду розробки веб-продуктів.
  </p>

  <h3 className="title-3">Мої ключові компетенції:</h3>
  
  <ul className="skills-list content-about">
    <li>
      <strong>Планування:</strong> Чітке планування та запуск веб-продуктів з нуля у комунікації з клієнтом (від збору вимог до релізу).
    </li>
    <li>
      <strong>Підтримка:</strong> Допрацювання, підтримка та оптимізація вже існуючих рішень (рефакторинг, робота з чужим кодом).
    </li>
    <li>
      <strong>Розробка:</strong> Розробка масштабних SPA та глибока інтеграція з REST API.
    </li>
    <li>
      <strong>Продуктовий підхід:</strong> Аналіз конкурентів, проектування UI/UX та адаптація рішень під задачі бізнесу.
    </li>
  </ul>
</li>
          <li className="content-list__item">
            <h2 className="title-2">Languages</h2>
            <p>JavaScript (ES6+), TypeScript, HTML5, CSS3, Python.</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>
              JavaScript, TypeScript, ReactJS, HTML, CSS, NPM, BootStrap,
              MaterialUI, VITE, TailwindCSS, StyledComponents
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Tools & Others</h2>
            <p>Git, GitHub, Figma, VS Code.</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
