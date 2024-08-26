// components/PopupButton.js
import React, { useState, useEffect, useRef } from 'react';
import { PopupModal } from 'react-calendly';

// Default pageSettings
const defaultPageSettings = {
    backgroundColor: '#292a2c',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '#ff5733',
    textColor: '#ffffff',
    hideGdprBanner: true,
};
const PopupButton = ({ pageSettings = defaultPageSettings, utm, buttonTitle, className, showIcon = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootElementRef = useRef(null);

    useEffect(() => {
        // Set the root element reference for the popup modal
        rootElementRef.current = document.getElementById('root');
    }, []);

    return (
        <div>
            <button
                // style={{ display: 'block', margin: '0 auto' }}
                onClick={() => setIsOpen(true)}
                className={className}
            >
                {buttonTitle}
                {showIcon && <i className="far fa-angle-right"></i>}
            </button>
            <PopupModal
                url="https://calendly.com/harish-setoo/schedule-a-discovery-session"
                pageSettings={pageSettings}
                utm={utm}
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={rootElementRef.current}
            />
        </div>
    );
};

export default PopupButton;