import React from 'react'
import bannerMain from "../Img/Banner.png"
import "./banner.css"
const Banner = () => {
    const banner_1 = {
        image: bannerMain,
        className: "bannerMain"
    }
    return (
        < div className="container" >
            <div className="BoxBanner">
                <img src={banner_1.image} className={banner_1.className} />
            </div>
            <div className="conTent" >
                <h2 >Winter Release</h2>
                <button className="btnBanner" >Bắt đầu tạo đơn</button>
            </div>
        </div >


    )
}

export default Banner