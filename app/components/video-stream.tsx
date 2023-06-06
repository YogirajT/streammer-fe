"use client";
import React, { useRef, useEffect, useState } from 'react';

function VideoStream() {
    let videoRef = useRef<HTMLVideoElement | null>(null);

    let [audio, setAudio] = useState(false);

    useEffect(() => {
        const constraints = { video: true };

        async function getMediaStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                if (videoRef?.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error(err);
            }
        }

        getMediaStream();
    }, []);

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline />
            <video
                autoPlay
                muted={audio}
                playsInline
                ref={ref => {
                    videoRef.current = ref;
                }}
            />
        </div>
    );
}

export default VideoStream;