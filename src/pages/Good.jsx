import React from 'react'
import { Link } from 'react-router-dom'

function Good() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", margin: "0 auto", width: "650px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px"><linearGradient id="IMoH7gpu5un5Dx2vID39Ra" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9dffce" /><stop offset="1" stop-color="#50d18d" /></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Ra)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><linearGradient id="IMoH7gpu5un5Dx2vID39Rb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stop-color="#135d36" /><stop offset=".931" stop-color="#125933" /><stop offset="1" stop-color="#11522f" /></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Rb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z" /></svg>
                <div>
                    <h1>Мы получили Ваш заказ.</h1>
                    <h1>Приступаем к работе.</h1>
                </div>
            </div>
            <div className="cart__bottom-buttons" style={{ justifyContent: 'center' }}>
                <a href="/" className="button button--outline button--add go-back-btn">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link to='/'>
                        <span>Вернуться назад</span>
                    </Link>
                </a>
            </div>
        </>
    )
}

export default Good
