import React from 'react'
import "../scss/footer.scss"

function Footer() {
    return (
        <div className='footer'>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h3 className='footer__title'>
                    Соцсети
                </h3>
                <a className='tega' title='Группа ВКонтакте' href="https://vk.com/public210797223" target="_blank">ВК</a>
                <a className='tega' title='ссылка на беседу Whatsapp' href="https://chat.whatsapp.com/DPvJHRAX0f36CqAQa24tsH" target="_blank">Whatsapp</a>

            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h3 className='footer__title'>
                    Контакты
                </h3>
                <a className='tega' title='Профиль ВКонтакте' href="https://vk.com/masha__mt" target="_blank">ВК</a>
                <span className='tega'>8 (912) 345 61-54</span>

            </div>

            <div style={{display: "flex", flexDirection: "column"}}>
                <h3 className='footer__title'>
                    Сделать заказ
                </h3>
                <a className='tega' title='сделать заказ в Whatsapp' href="https://chat.whatsapp.com/DPvJHRAX0f36CqAQa24tsH" target="_blank">Whatsapp</a>
                <span className='tega'title='сделать заказ по телефону'>8 (965) 555 18-92</span>

            </div>
        </div>
    );
}

export default Footer
