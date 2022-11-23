import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NavBar from '../../../layout/NavBar';
import Footer from '../../../layout/Footer';
import Map from './map';
import IList from './IList';
import ITitle from './ITitle';
import IRecSite from './iRecSite';
import IRecFood from './iRecFood';
import './Itinerary-detail.scss';
import { ITINERARY_ITEM } from './site-config';
import { DragDropContext } from 'react-beautiful-dnd';

function ItineraryDetail() {
  const [iData, setIData] = useState({});

  const location = useLocation();

  async function getList() {
    const path = window.location.pathname.split('/');
    const sid = path[2];
    const response = await axios.get(ITINERARY_ITEM + sid);
    setIData(response.data);
  }

  useEffect(() => {
    getList();
  }, [location]);

  return (
    <>
      <NavBar />
      <ITitle />
      <div id="iContainer">
        <div id="iList">
          <DragDropContext>
            <IList iData={iData} />
          </DragDropContext>
        </div>
        <Map />
      </div>
      <div id="iRecItems">
        <IRecSite />
        <IRecFood />
      </div>
      <Footer />
    </>
  );
}

export default ItineraryDetail;
