import React, { useRef, useEffect, useState } from 'react';
import { Heatmap } from '@paper-design/shaders-react';

export default function Background() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -5,
            pointerEvents: 'none'
        }}>
            <Heatmap
                width={dimensions.width}
                height={dimensions.height}
                image={`${import.meta.env.BASE_URL}images/aldux_logo.png`}
                colors={["#080f36", "#318de3", "#8c30e8", "#e66bff", "#ffe77a", "#7d57fa"]}
                colorBack="#000000"
                contour={0.84}
                angle={0}
                noise={0}
                innerGlow={0.53}
                outerGlow={0.5}
                speed={0.5}
                scale={0.19}
                offsetY={-0.36}
            />
        </div>
    );
}
