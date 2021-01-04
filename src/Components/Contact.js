import React from "react";
import styles from "./Contact.module.css";
import image from "../assets/contato.jpg";
import Head from "./Head";

const Contact = () => {
  return (
    <>
      <Head title="Contact" description="Contact us for more information" />
      <section className={`${styles.contato} animeLeft`}>
        <img alt="WriteMachine" src={image} />
        <div>
          <h1>Contact us</h1>
          <ul className={styles.dados}>
            <li>jerry.castro96@outlook.com </li>
            <li>+55 88 99696-6442 </li>
            <li>62042-310</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
