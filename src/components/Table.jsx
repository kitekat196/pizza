import pizza from '../assets/img/pizza.jpg'
import kitchen from '../assets/img/kyxHu.png'


import "../scss/table.scss"
import React from 'react'

function Table() {
    return (
        <>
        <table width="90%" border="0" cellspacing="0" cellpadding="0">
        <tbody className='table__flex1'>
          <tr>
            <td height="70"></td>
            <td rowspan="2" width="70"></td>
            <td></td>
          </tr>
          <td>
            <div className='img'>
              <img src={pizza} alt="пицца" />
            </div>
          </td>
          <td>
            <div className="about__us">
              <div className="about__us__block">
                <p className="about__us__title">ПИЦЦА</p>
                <p className="about__us__subtitle">ЛУЧШЕЕ ТЕСТО</p>
              </div>
              <p className="about__us__descr">Вкусная пицца начинается с правильного теста.
                Для того, чтобы обеспечить исключительный контроль над качеством теста, мы открыли
                собственное производство, на котором ежедневно производится свежее тесто для всех
                наших пиццерий. Мы замешиваем тесто только вручную раскатываем тонким слоем.
                Покрываем соусами по оригинальным рецептам и равномерно выкладываем начинку.
                Выпекаем пиццу в специальной конвейерной печи и следим за тем, чтобы она равномерно
                пропекалась со всех сторон. Каждый рецепт нашей пиццы — это выверенное сочетание
                теста, соуса, сыра и начинки.
              </p>
            </div>
          </td>
        </tbody>
      </table>


      <table width="90%" border="0" cellspacing="0" cellpadding="0">
        <tbody className='table__flex2'>
          <tr>
            <td height="70"></td>
            <td rowspan="2" width="70"></td>
            <td></td>
          </tr>
          <td>
            <div className="about__us">
              <div className="about__us__block">
                <p className="about__us__title">КУХНИ</p>
                <p className="about__us__subtitle">КУХНИ ДЛЯ НАС — ГЛАВНОЕ</p>
              </div>
              <p className="about__us__descr">Кухни для нас — главное. В них воплощается весь
                наш опыт. Именно здесь профессиональные повара на современном производстве создают
                блюда, которые ежедневно заказывают тысячи людей. На каждой из наших кухонь работает
                более 100 человек и все они — фанаты своего дела. Мы тщательно отбираем поставщиков
                и продукты для каждого блюда. Все ингредиенты проходят этапы тестов и дегустаций,
                после чего ложатся в основу нового рецепта. После запуска мы внимательно следим за
                вашими отзывами и дорабатываем каждый продукт, чтобы он нравился всем. Ежедневно
                инспектор службы контроля проверяет каждую из наших кухонь на соответствие высоким
                стандартам качества и чистоты.
              </p>
            </div>
          </td>
          <td>
            <div className="about__us">
              <img src={kitchen} alt="кухни" />
            </div>
          </td>
        </tbody>
      </table>


</>
    )


    
}

export default Table
