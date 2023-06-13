import React from 'react'
import '../scss/forma.scss'

function CallBack({ name, date, callback }) {
    return (
        <div class="forma">
            <div class="forma-call_back">
                <div class="forma-call_back-name">
                    <div class="name">
                        <p>{name}</p>
                    </div>
                    <div class="date">
                        <p>{date}</p>
                    </div>
                </div>
                <div class="forma-call_back-otziv">
                    <p>{callback}</p>
                </div>
            </div>
        </div>
    )
}


export default CallBack;
