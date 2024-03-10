import React from "react";
import styles from "./Contact.module.scss";
import SectionHeader from "../sectionHeader/SectionHeader";
import { contactData } from "./contact.data";
import Image from "next/image";
import Button from "../button/Button";
const Contact = () => {
  return (
    <section className={styles.section} id="con">
      <SectionHeader>Contact</SectionHeader>
      <main className={styles.main}>
        <div className={styles.map}></div>
        <div className={styles.contact}>
          {contactData.map((item, i) => (
            <div className={styles.item} key={i}>
              <div>
                <Image width={100} height={100} src={item.icon} alt="" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.form}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <input placeholder="Email" />
              <input placeholder="Full name" />
            </div>
            <textarea placeholder="Desctiption" />
          </div>
          <Button
            onClick={async () =>
              await fetch("/api/mail", {
                method: "post",
              })
            }
          >
            Send
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Contact;
