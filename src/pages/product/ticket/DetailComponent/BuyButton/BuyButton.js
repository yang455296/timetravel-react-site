import { React, useState } from 'react';
import './BuyButton.scss';
import { useTicketContext } from '../../Context/TicketContext';
import Swal from 'sweetalert2';
import { useTicketCart } from '../../../../cart/utils/useCart';
function BuyButton() {
  const { addItem } = useTicketCart();
  const {
    ticketCounts,
    ticketTypePrice,
    ticketListData,
    pickDate,
    typesChooseName,
  } = useTicketContext();
  const ticketOrder = {
    id: ticketListData.sid,
    name: ticketListData.product_name,
    type: typesChooseName,
    quantity: ticketCounts,
    date: pickDate.startTime,
    price: ticketTypePrice,
  };

  return (
    <>
      <div
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: '已加入購物車！',
          });
          addItem(ticketOrder);
        }}
        className="BookingBarPriceAndButton"
      >
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#63D2FF' }}
        >
          加入購物車
        </button>
      </div>
      <div
        className="noMarginRight BookingBarPriceAndButton"
        onClick={() => {
          addItem(ticketOrder);
        }}
      >
        <button
          className="BottomBar_Buy_Right "
          style={{ backgroundColor: '#59d8a1' }}
        >
          立即訂購
        </button>
      </div>
    </>
  );
}

export default BuyButton;
