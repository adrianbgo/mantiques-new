import { useState } from "react";
import styles from "../styles/Login.module.css";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Login Logic
    console.log(`Submitting email: ${email} and password: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          <br />
          <Link href="/resetpassword">Forgot Password?</Link>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
