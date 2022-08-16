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
        const ceremonyMap = {
            1: {
                title: 'Lễ Vu Quy',
                day: 'Thứ Sáu', 
                date: '02/09',
                year: '2022',
                time: '08:00',
                lunar: '07/08',
                place: 'Tại nhà gái',
                address: 'Triệu Phong - Quảng Trị',
            },
            2: {
                title: 'Lễ Thành Hôn',
                date: '04/09',
                day: 'Chủ Nhật',
                year: '2022',
                time: '10:00',
                lunar: '09/08',
                place: 'Tại nhà trai',
                address1: 'Thôn Hưng Thịnh, xã Hoàng Nam',
                address: 'Nghĩa Hưng - Nam Định',
            },
            3: {
                title: 'Lễ Báo Hỷ',
                date: '11/09',
                day: 'Chủ Nhật',
                year: '2022',
                time: '18:00',
                lunar: '16/08',
                place: 'Sảnh Rome, Lầu 2',
                restaurant: 'Vân Nghĩa',
                address: '333 Đ. Nguyễn Văn Luông, Phường 12, Quận 6, Thành phố Hồ Chí Minh',
            },
        };
        const ceremony = ceremonyMap[this.props.invitation.type];
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
                    Đến dự {ceremony.title} của hai {this.props.invitation.myTitle}
                </div>
               
                <div className="titlte">Được tổ chức vào lúc {ceremony.time}</div>
                <div className="invitation-time-address">
                    <div className="invitation-time">
                        <div className="day">{ceremony.day}</div>
                        <div className="date">{ceremony.date}</div>
                        <div className="year">{ceremony.year}</div>
                        <div className="lunar-date">({ceremony.lunar})</div>
                    </div>
                    <div className="between-sepacrator"></div>
                    <div className="address" >
                        <div className='floor'>{ceremony.place}<br></br>{(ceremony.restaurant ? 'Nhà hàng tiệc cưới' : '')}</div>
                        <div className='restaurant'>{(ceremony.restaurant ? ceremony.restaurant : '')}</div>
                        {ceremony.address1 ? <div className="full-address"><br></br>{ceremony.address1}</div>: ''}
                        <div className='full-address'>{ceremony.address}</div>
                        
                        {ceremony.restaurant ?
                        <div className='icons'>
                            <a target="blank" href='http://www.vannghiapalace.com/sanh-tiec/sanh-rome.html'
                                 title='Trang web' > 
                                <span className='icon-address' ><img src={process.env.PUBLIC_URL + "/images/restaurant.png"}  alt="" />
                                </span>
                            </a>
                            
                            <a target="blank" title='Chỉ đường' 
                                href='https://www.google.com/maps/dir/?api=1&destination=10.749961465233808, 106.63532412669963'> <span className='icon-address' ><img src={process.env.PUBLIC_URL + "/images/mapicon.png"}  alt="" /></span></a>
                        </div>
                        : ''}
                    </div>
                </div>
                <div className="wellcome hw">Sự hiện diện của <span>{this.props.invitation.guestTitle}</span> là niềm vinh hạnh <br/> cho gia đình {this.props.invitation.myTitle}</div>
            </div>
        </div>
    }
}

export default PartyCard;