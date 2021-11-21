import React from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51Jx6ZtB2nwk46R8sNsaLp5BxwsRsCUcHUeqot2rSbdFYcOi5Zq8FMIW2Si79cJRmLD6QXMpNUE14W8ObMrFLA7qy00hCEYXmPk";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Gom shop"
        billingAddress
        shippingAddress
        description="Your totalis $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay NOW
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
