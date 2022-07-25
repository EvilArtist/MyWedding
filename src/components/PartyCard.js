import React from 'react';
import './PartyCard.css';

class PartyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
    }

    render() {
        return <div className="party-card">
            <div className="corner-image">
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + "/images/corner.png"}  alt="" />
                </div>
            </div> 
            <div className="invitation-card-inner">
                <div className="invitation-title">
                    Trân trọng kính mời
                </div>
                <div className="invitation-guest-name hw">
                    Anh và gia đình
                </div>
                <div className="invitation-content">
                    Đến dự lễ báo hỷ của hai chúng tôi
                </div>
                <div className="groom-bride-name">
                    <div className='image-border'>
                        <img src={process.env.PUBLIC_URL + "/images/cart-name-border.png"}  alt="" />
                    </div>
                    <div className="groom-name hw">Xuân Lộc</div>
                    <div className="heart-container">

                    <div className='heart'>&#10084;</div>
                    </div>
                    <div className="bride-name hw">Quỳnh Ái</div>
                </div>
                    <div className="titlte">Được tổ chức vào lúc 18:00</div>
                <div className="invitation-time-address">
                    <div className="invitation-time">
                        <div className="day">Chủ nhật</div>
                        <div className="date">11/09</div>
                        <div className="year">2022</div>
                        <div className="lunar-date">(15-08)</div>
                    </div>
                    <div className="between-sepacrator"></div>
                    <a className="address" target="blank" href='https://www.google.com/maps/dir/?api=1&destination=10.749961465233808, 106.63532412669963'>
                        <div className='floor'>Sảnh Paris, Lầu 2<br></br> Nhà hàng tiệc cưới</div>
                        <div className='restaurant'>Vân Nghĩa</div>
                        <div className='full-address'>333 Đ. Nguyễn Văn Luông, Phường 12, Quận 6, Thành phố Hồ Chí Minh
                            
                        </div>
                        <span className='icon-address' ><img src={process.env.PUBLIC_URL + "/images/mapicon.png"}  alt="" /></span>
                    </a>
                </div>
                <div className="wellcome hw">Sự hiện diện của anh là niềm vinh hạnh <br/> cho gia đình chúng tôi</div>
            </div>
        </div>
    }
}

export default PartyCard;