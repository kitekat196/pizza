import React from 'react'

function Order() {
    return (
        <>
            <div style={{ width: "50%", margin: "0 auto" }}>
                <div style={{ textAlign: "center" }}>
                    <h2>Введите информацию для связи с Вами</h2>
                </div>
                <form action='/Good'>
                    <div class="form-group" style={{ margin: "20px 0" }}>
                        <label for="exampleInputEmail1" style={{ fontSize: "22px" }}>Имя</label>
                        <input  name="name" required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя" />
                    </div>
                    <div class="form-group" style={{ margin: "20px 0" }}>
                        <label for="exampleInputPassword1" style={{ fontSize: "22px" }}>Номер телефона</label>
                        <input  name="number" required type="number" class="form-control" placeholder="89999999999" />
                    </div>
                    <div class="form-group" style={{ margin: "20px 0" }}>
                        <label for="exampleInputPassword1" style={{ fontSize: "22px" }}>Комментарий</label>
                        <textarea style={{ resize: "none", }} type="text" class="form-control" placeholder="буду через 30 минут"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Отправить</button>
                </form>
            </div>
        </>
    )
}

export default Order
