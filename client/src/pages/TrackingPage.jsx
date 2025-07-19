import React from 'react';
import { useParams } from 'react-router-dom';
import TrackComponent from '../components/TrackComponent/TrackComponent';

const TrackingPage = () => {
  const { trackingId } = useParams();

  return (
    <div>
      <TrackComponent trackingId={trackingId} />
    </div>
  );
};

export default TrackingPage;
