import React from "react";

import Container from "./Container";
import Header from "./Header";
import QRCode from "./QRCode";

function CouponModal({ data, closeModal }) {
  console.log(closeModal);
  return (
    <Container>
      <Header closeModal={closeModal} title={data.title} />
      <QRCode qrImage={data.qr_code} />
    </Container>
  );
}

export default CouponModal;
