import { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import styles from "./CheckoutForm.module.css";
import { PaymentMethod } from "@stripe/stripe-js";
interface ICheckoutForm {
  isProcessing: boolean;
  handleProcessing: (value: boolean) => void;
}
const CheckoutForm: React.FC<ICheckoutForm> = ({
  isProcessing,
  handleProcessing,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    handleProcessing(true);
    const cardElement = elements.getElement(CardElement)!;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
        email,
        address: {
          line1: address,
          city,
          state,
          postal_code: zip,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message!);
      handleProcessing(false);
    } else {
      setErrorMessage(null);
      console.log(paymentMethod as PaymentMethod);
      handleProcessing(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <label>
        ZIP
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </label>
      <label>Card details</label>
      <CardElement />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <button type="submit" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Pay now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
