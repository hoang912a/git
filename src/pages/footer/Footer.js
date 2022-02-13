import imageFooter from '../Img/image_footer.png'
import './Footer.css'
export default function Footer() {
    return (
        <div id="footer">
            <div className="content_image">
                <img src={imageFooter} />
            </div>
            <div className="content_text">
                <h4>Công ty TNHH Shopee Express</h4><br />
                <p>Giấy CNĐKKD số 0316242421- Ngày cấp 21/04/2020</p>
                <p><strong>Cơ quan cấp: </strong><span>Phòng Đăng ký kinh doanh- Sở Kế hoạch và Đầu tư TP Hồ Chí Minh</span></p>
                <p><strong>Địa chỉ trụ sở chính: </strong>
                    <span>Tầng 17, Tòa nhà Saigon Centre 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</span></p>
                <p><strong>Liên hệ: </strong><span>...113</span></p>
            </div>
        </div>
    )
}