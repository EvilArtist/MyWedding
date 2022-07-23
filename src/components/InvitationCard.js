import React from 'react';
import './InvitationCard.css';

class InvitationCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
    }

    render() {
        return <div className="invitation-card">
            <div className="corner-image">
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + "/images/corner.png"}  alt="" />
                </div>
            </div> 
            <div className="invitation-card-inner">
                <div className="parent-name">
                    <div className="groom">
                        <div className="title">Ông Bà</div>
                        <div className="dad">NGUYỄN VĂN PHƯỚC</div>
                        <div className="mom">NGUYỄN THỊ TUYẾT</div>
                        <div className="title address">
                            Đội 5, Hoàng Nam,<br/>Nghĩa Hưng, Nam Định
                        </div>
                    </div>

                    <div className="bride">
                        <div className="title">Ông Bà</div>
                        <div className="dad">NGUYỄN ĐỨC ĐỊNH</div>
                        <div className="mom">LÊ THỊ VIÊN</div>
                        <div className="title address">
                            431 Lê Duẩn, tt Ái Tử,<br/>Triệu Phong, Quảng Trị
                        </div>
                    </div>
                </div>
                <div className="invitation-name">
                    Trân trọng báo tin <strong>LỄ THÀNH HÔN</strong><br/>
                    của hai con chúng tôi
                </div>
                <div className="groom-name handwrite big-name">
                    Nguyễn Xuân Lộc
                </div>
                <div className="position">(Trưởng Nam)</div>
                <div className="vs hw">Sánh duyên cùng</div>
                <div className="bride-name handwrite big-name">
                    Nguyễn Thị Quỳnh Ái
                </div>
                <div className="position">(Thứ nữ)</div>

                <div className="wedding-details">
                    <p>
                        Hôn lễ được cử hành tại tư gia
                    </p>
                    <p>Vào lúc 10:00, ngày mùng 4 tháng 9 năm 2022</p>
                    <p>Nhằm ngày mùng 9 tháng 8 năm Nhâm Dần</p>
                </div>
            </div>
        </div>
    }
}

export default InvitationCard;