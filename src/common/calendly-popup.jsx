// components/CalendlyPopupModal.js
import React, { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';

const CalendlyPopupModal = ({ url, text, className }) => {
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRootElement(document.getElementById('root'));
        }
    }, []);

    if (!rootElement) {
        return null;
    }

    return (
        <PopupModal
            url={url}
            rootElement={rootElement}
            text={text}
            className={className}
            color="#00a2ff"
        />
    );
};

export default CalendlyPopupModal;
