import React from 'react'
import './Delivery.css'
import delivery1 from '../Img/delivery1.png'
import delivery2 from '../Img/delivery2.png'
import delivery3 from '../Img/delivery3.png'
import delivery4 from '../Img/delivery4.png'
export default function Delivery() {
    const object_delivery = [
        {
            id: 1,
            image_delivery: delivery1,
            title_delivery: "Giao hang nhanh Tỷ lệ hoàn hàng thấp",
            title_content: "Với tiêu chuẩn vận chuyển nghiêm ngặt, Shopee Express đảm bảo đơn hàng được giao đến trong trạng thái tốt nhất với chi phí hợp lý nhất."

        },
        {
            id: 2,
            image_delivery: delivery2,
            title_delivery: "Giao hang nhanh Tỷ lệ hoàn hàng thấp",
            title_content: "Giao hàng nhanh chóng , giảm thiểu tối đa rủi ro hoàn hàng"

        },
        {
            id: 3,
            image_delivery: delivery3,
            title_delivery: "Giao hang nhanh Tỷ lệ hoàn hàng thấp",
            title_content: "Các nhân viên của Shopee Express luôn nỗ lực cố gắng để đáp ứng kịp thời các nhu cầu từ khách hàng."

        },
        {
            id: 4,
            image_delivery: delivery4,
            title_delivery: "Giao hang nhanh Tỷ lệ hoàn hàng thấp",
            title_content: "Giao hàng nhanh chóng , giảm thiểu tối đa rủi ro hoàn hàng"

        }
    ]
    return (
        <div id="Delivery">
            <div className="title"><h2>Đối tác giao giàng tin cậy</h2></div>
            <div className="title_delivery">
                {object_delivery.map(Title_delivery)}

            </div>
        </div>
    )
}


function Title_delivery(props) {
    return (
        <div key={props.id}>
            <div className="ctn_1">
                <img src={props.image_delivery} />
            </div>
            <div className="ctn_2">
                <h3>{props.title_delivery}</h3>
                <p>{props.title_content}</p>
            </div>
        </div>
    )
}