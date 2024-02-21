'use client'
import { useState, useEffect } from "react";

function useDeviceSize(): Array<number> {
    const [deviceSize, setDeviceSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setDeviceSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return [deviceSize.width, deviceSize.height];
}

export default useDeviceSize;