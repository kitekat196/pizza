import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CallBack } from "../components";

function ControlledCarousel({ }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
<div style={{ width: "70%", margin: "0 auto" }}>
        <h3 class="formstyle__otzivi">Отзывы</h3>
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={"7000"}>
        <Carousel.Item >
          <CallBack 
            name={"Ирина"}
            date={"7.03.2021"}
            callback={" Заказали здесь пиццу, очень понравилось . Пицца огромная и дешёвая, брали калифорнию, тесто тонкое, корочки хрустящие, перец халапеньо нереально острый и нарезан очень крупно, вкусные колбаски. Пицца на столько большая, что ели её почти 2 дня ."}
          />
        </Carousel.Item>

        <Carousel.Item>
          <CallBack
            name={"Гость"}
            date={"1.05.2021"}
            callback={"Pizza Express 24 сильно отличается от заведений подобного рода, у нее есть свои плюсы и минусы, но качество и вкус еды в \"Pizza Express 24\" неизменно остается на высоте."}
          />
        </Carousel.Item>

        <Carousel.Item>
          <CallBack
            name={"Максим"}
            date={"19.07.2021"}
            callback={"Великолепное тонкое тесто! Продукты свежие, готовили при мне! Детям тоже очень понравилось, особенно пицца 55 см! Обязательно ещё приеду за вкусненькой пиццей!"}
          />
        </Carousel.Item>

        <Carousel.Item>
          <CallBack
            name={"Гость"}
            date={"22.07.2021"}
            callback={"Пицца \"Цезарь\" с соусом из базилика. Как же это аппетитно, ароматно, свежо, а главное вкусно). Пицца очень хрустящая. Ещё кофе у них вкусное. Но кофе выпили по дороге. Часто берем пиццу в этой пиццерии, одно чувство удовольствия. Достойный конкурент. Рекомендую."}
          />
        </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default ControlledCarousel;