import React from 'react'

const Total = (props) => {

    const { total } = props;

    return (
        <aside class="col-md-3">
            <div class="card mb-3">
                
                <div class="card">
                    <div class="card-body">
                        <dl class="dlist-align">
                            <dt>Tổng tiền:</dt>
                            <dd class="text-right" style={{ color: "pink" }} >{total}₫</dd>
                        </dl>
                        <dl class="dlist-align">
                            <dt>Giảm giá:</dt>
                            <dd class="text-right">0₫</dd>
                        </dl>
                        <dl class="dlist-align">
                            <dt>Tổng:</dt>
                            <dd class="text-right  h5"><strong>{total}₫</strong></dd>
                        </dl>
                        <hr />
                        <p class="text-center mb-3">
                            <img src={require("../../assets/images/misc/payments.png")} />
                        </p>

                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Total