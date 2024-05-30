import React, { useRef, useState } from 'react'

export const ScreenVideo = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        videoRef.current.srcObject = stream;

        mediaRecorderRef.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorderRef.current.ondataavailable = (e) => {
            chunks.push(e.data);
        };

        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            setVideoURL(url);
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        setIsRecording(false);
    };

    const downloadRecording = () => {
        const a = document.createElement('a');
        a.href = videoURL;
        a.download = 'recording.webm';
        a.click();
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
            <div className="bg-white p-2 rounded shadow-lg max-w-5xl w-470px flex flex-col justify-center items-center h-[500px] gap-9 " onClick={(e) => e.stopPropagation()}>
                <div className=' flex items-center gap-8 ' >
                    <video ref={videoRef} autoPlay muted style={{ width: '400px', height: '300px', marginTop: '25px' }}></video>
                    {videoURL && (
                        <div>
                            <h3>Recorded Video:</h3>
                            <video src={videoURL} controls style={{ width: '400px', height: '300px' }}></video>
                            <button onClick={downloadRecording} style={{ marginTop: '10px' }}>Download Video</button>
                        </div>
                    )}
                </div>
                <div>
                    {isRecording ? (
                        <button onClick={stopRecording}>Stop Recording</button>
                    ) : (
                        <button onClick={startRecording}>Start Recording</button>
                    )}
                </div>
            </div>
        </div>
    )
}
