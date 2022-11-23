import React from 'react';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../../node_modules/antd/dist/antd.css';
import './Ticket.scss';
import Breadcrumb from './Breadcrumb/Breadcrumb.js';
// import Carousel from './Carousel/Carousel.js';
import Sidebar from './Sidebar/Sidebar.js';
import Slider from './Slider/Slider.js';
import DatePicker from './DatePicker/DatePicker.js';
import RankChoose from './RankChoose/RankChoose.js';
import CitySelection from './CitySelection/CitySelection.js';
// import CardList from '../../../Component/Card_List/Card_List';

function Ticket() {
  return (
    <>
    <NavBar />
      <div className="container marginTop">
        <Row>
          <Breadcrumb />
          <Col className="col-3">
            <CitySelection />
            <Sidebar />
            <DatePicker />
            <Slider />
            <RankChoose />
          </Col>
          <Col className="col-9">
            {/* <CardList /> */}
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default Ticket;
