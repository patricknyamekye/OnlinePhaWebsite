import React, { useEffect, useState } from 'react';
import styles from './TrackComponent.module.css';

const TRACKING_STAGES = [
  'Order Received',
  'Preparing Order',
  'Out for Delivery',
  'Delivered',
];

const TrackComponent = ({ trackingId }) => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < TRACKING_STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 2 * 60 * 1000); // 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Tracking Order</h1>
      <p><strong>Tracking ID:</strong> {trackingId}</p>

      <ul className={styles.statusList}>
        {TRACKING_STAGES.map((stage, index) => (
          <li
            key={stage}
            className={
              index < statusIndex
                ? styles.completed
                : index === statusIndex
                ? styles.active
                : styles.inactive
            }
          >
            {stage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackComponent;
