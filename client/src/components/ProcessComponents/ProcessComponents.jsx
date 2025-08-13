import React from "react";
import styles from "./Process.module.css";
import { FaProductHunt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const ProcessComponents = () => {
  return (
    <div className={styles.processContainer}>
      <div className={styles.processContainerWrapper}>
        <div className={styles.cards}>
          <span>
            <FaProductHunt />
          </span>
          <p>
            Quickly view product images, prices, and details at a glance. Easily
            browse and choose what you need.
          </p>
        </div>

        <div className={styles.cards}>
          <span>
            <FaSignInAlt />
          </span>
          <p>
            Access your account to manage orders, track deliveries, and enjoy a
            personalized shopping experience. Fast and secure login.
          </p>
        </div>

        <div className={styles.cards}>
          <span>
            <FaCartPlus />
          </span>
          <p>
            Add items to your cart as you shop. Review your selections and
            adjust quantities before checkout — simple and flexible.
          </p>
        </div>

        <div className={styles.cards}>
          <span>
            <MdPayments />
          </span>
          <p>
            Add items to your cart as you shop. Review your selections and
            adjust quantities before checkout simple and flexible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessComponents;
