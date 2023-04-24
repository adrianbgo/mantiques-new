import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MvLVsC6ZZw5e0hVnvDcLObL4Ks8jzbRCGNsHZNvnP6rlqZonZL4rAyw5exeph4y28fE8IeBaWlowGyQs3GT2V1d00FbjrvtOD"
);

const Checkout = () => {
  const [isProcessing, setProcessing] = useState<boolean>(false);

  const handleProcessing = (processing: boolean) => {
    setProcessing(processing);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          isProcessing={isProcessing}
          handleProcessing={handleProcessing}
        />
      </Elements>
    </div>
  );
};

export default Checkout;
