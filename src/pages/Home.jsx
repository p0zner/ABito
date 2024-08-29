import { Header } from "../components/Header/Header";
import { Card } from "../components/Card/Card";
import { cardArray } from "../constants";
import { sideItemsArr } from "../constants";
import { SideItems } from "../components/SideItem/SideItem";

export const Home = () => {
   return (
      <>
         <Header />
         <main>
            <section className="search">
               <div className="container">
                  <div className="search-box">
                     <input type="text" />
                     <button className="btn btn-primary search-btn">
                        <img className="search-btn__icon" src="/images/search.svg" alt="search" />
                        <span className="search-btn__text">Найти</span>
                     </button>
                  </div>
               </div>
            </section>

            <section className="content">
               <div className="container">
                  <div className="content-box">
                     <div className="content-main">
                        <h2 className="content-main__title">Рекомендации для вас</h2>
                        <div className="content-main__list">
                           {
                              cardArray.map((card) => (
                                 <Card
                                    key={card.id}
                                    title={card.title}
                                    price={card.price}
                                    address={card.address}
                                    date={card.date}
                                    img={card.img}
                                 />
                              ))
                           }
                        </div>
                     </div>

                     <div className="content-side">
                        <h3 className="content-side__title">Сервисы и услуги</h3>
                        <div className="content-side__box">
                           <div className="content-side__list">
                              {
                                 sideItemsArr.map((sideItem) => (
                                    <SideItems 
                                    key={sideItem.id}
                                    title={sideItem.title}
                                    img={sideItem.img}
                                    desc={sideItem.desc}
                                    />
                                 ))
                              }
                           </div>
                           <div className="content-side__footer">
                              <p className="content-side__footer--item">© ООО «Абито», 2011–2021</p>
                              <a className="content-side__footer--item" href="#!">Политика конфиденциальности</a>
                              <a className="content-side__footer--item" href="#!">Обработка данных</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

         </main>
      </>
   )
};