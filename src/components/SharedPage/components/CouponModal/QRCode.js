import React from "react";
import { getQR } from "utils/imgUri";

function QRCode({ qrImage }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          margin: "0 0 auto 0",
          fontSize: "14px",
          fontWeight: 100,
          color: "rgba(0,0,0,0.5)",
        }}
      >
        Scan this QR code to get discount during checkout!
      </p>
      <img
        style={{
          widows: "100%",
          height: 200,
          objectFit: "contain",
          marginTop: "-50%",
          marginBottom: "auto",
        }}
        src={getQR(qrImage)}
        alt="coupon-qr"
      />
    </div>
  );
}

export default QRCode;
