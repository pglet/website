import React from 'react';

export const Replit = ({ src, height }) => {
    let frame = <iframe
        src={src}
        style={{
            border: 'none',
            width: '100%',
            height: height ? height : '100px',
        }}>
    </iframe>
    return frame;
};