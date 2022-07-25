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
            <div className="background-image">
                <img src={process.env.PUBLIC_URL + "/images/background.png"}  alt="" />
            </div> 
            <div className="invitation-card-inner">
                <div className="invitation-card-name handwrite big-name">
                    Thiệp mời
                </div>
                <div className="invitation-title">
                    Trân trọng kính mời
                </div>
                <div className="invitation-guest-name hw">
                    {this.props.invitation.guestNameAndRelation}
                </div>
                <div className="invitation-content">
                    Đến dự lễ báo hỷ của hai {this.props.invitation.myTitle}
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
                    <div className="address" >
                        <div className='floor'>Sảnh Paris, Lầu 2<br></br> Nhà hàng tiệc cưới</div>
                        <div className='restaurant'>Vân Nghĩa</div>
                        <div className='full-address'>333 Đ. Nguyễn Văn Luông, Phường 12, Quận 6, Thành phố Hồ Chí Minh
                            
                        </div>
                        <div className='icons'>
                            <a target="blank" href='http://www.vannghiapalace.com/sanh-tiec/sanh-rome.html'
                                 title='Trang web' > 
                                <span className='icon-address' ><img src={process.env.PUBLIC_URL + "/images/restaurant.png"}  alt="" />
                                </span>
                            </a>
                            <a target="blank" title='Chỉ đường' 
                                href='https://www.google.com/maps/dir/?api=1&destination=10.749961465233808, 106.63532412669963'> <span className='icon-address' ><img src={process.env.PUBLIC_URL + "/images/mapicon.png"}  alt="" /></span></a>
                        </div>
                       
                    </div>
                </div>
                <div className="wellcome hw">Sự hiện diện của <span>{this.props.invitation.guestTitle}</span> là niềm vinh hạnh <br/> cho gia đình {this.props.invitation.myTitle}</div>
            </div>
        </div>
    }
}

export default PartyCard;