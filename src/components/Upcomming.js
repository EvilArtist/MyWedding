import React from "react";

import "./Upcomming.css";

class Upcomming extends React.Component {
    constructor(props) {
        super(props);
        this.getDiffTime.bind(this);
        this.state = {
           time: this.getDiffTime()
        };
    }

    getDiffTime() {
        const vuquy = new Date("2022-09-02T08:00:00+07:00");
        const thanhhon = new Date("2022-09-04T10:00:00+07:00");
        const baohy = new Date("2022-09-11T18:00:00+07:00");
        const now = new Date();
        let diffTime = vuquy - now;
        let event = "Lễ Vu Quy";
        let place = "Tại nhà gái (Triệu Phong - Quảng Trị)";
        if (diffTime < 0) {
            diffTime = thanhhon - now;
            event = "Lễ Thành Hôn";
            place = "Tại nhà trai (Nghĩa Hưng - Nam Định)";
            if (diffTime < 0) {
                diffTime = baohy - now;
                event = "Lễ Báo Hỷ";
                place = "Sảnh Rome - Nhà Hàng tiệc cưới Vân Nghĩa";
            }
        }
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        return {
            days: diffDays.toFixed(0).padStart(2, '0'),
            hours: hours.toFixed(0).padStart(2, '0'),
            minutes: minutes.toFixed(0).padStart(2, '0'),
            seconds: seconds.toFixed(0).padStart(2, '0'),
            event: event,
            place: place
        };
    }
    componentDidMount() {
        if ( this.timer) {
            clearInterval(this.timer);
        }
        this.timer = setInterval(() => this.setState({
            time: this.getDiffTime()
        }), 1000);
    }
    render() {
        return <div className="upcomming-container">
            <div className="event-label">{this.state.time.event}</div>
            <div className="coundown">
                <div className="hidden">&nbsp;</div>
                <div className="countdown-item-container">
                    <div className="coundown-item">
                        <div className="coundown-item-value">{this.state.time.days}</div>
                        <div className="coundown-item-label">Ngày</div>
                    </div>
                </div>
                <div className="countdown-item-container">
                    <div className="coundown-item">
                        <div className="coundown-item-value">{this.state.time.hours}</div>
                        <div className="coundown-item-label">Giờ</div>
                    </div>
                </div>

                <div className="countdown-item-container">
                    <div className="coundown-item">
                        <div className="coundown-item-value">{this.state.time.minutes}</div>
                        <div className="coundown-item-label">Phút</div>
                    </div>
                </div>

                <div className="countdown-item-container">
                    <div className="coundown-item">
                        <div className="coundown-item-value">{this.state.time.seconds}</div>
                        <div className="coundown-item-label">Giây</div>
                    </div>
                </div>
            </div>
            <div className="event-label">{this.state.time.place}</div>
        </div>
    }
}

export default Upcomming;