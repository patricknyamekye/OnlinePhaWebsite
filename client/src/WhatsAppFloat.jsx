import React from 'react';

const whatsappNumber = '233245731495';
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

const iconStyle = {
  position: 'fixed',
  bottom: '32px',
  right: '32px',
  zIndex: 999,
  width: '60px',
  height: '60px',
  backgroundColor: '#25D366',
  borderRadius: '50%',
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s',
};

const svgStyle = {
  width: '32px',
  height: '32px',
  color: '#fff',
};

const WhatsAppFloat = () => (
  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={iconStyle} title="Chat on WhatsApp">
    <svg style={svgStyle} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.678 4.627 1.963 6.6L4 29l7.6-1.963A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.57-5.53-1.65l-.39-.25-4.52 1.17 1.2-4.4-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.36-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .14.19 2.05 3.14 5.01 4.28.7.24 1.25.38 1.68.49.7.18 1.34.16 1.84.1.56-.07 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
    </svg>
  </a>
);

export default WhatsAppFloat;