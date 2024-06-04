import { useRef, useState } from 'react';

export const ScreenVideo = ({ isOpen, onClose }) => {
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailURL, setThumbnailURL] = useState('');

    if (!isOpen) return null;

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
            videoRef.current.srcObject = null;
            crearMiniatura(url)
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        setIsRecording(false);
    };

    const restartRecording = () => {
        setVideoURL('');
        startRecording();
    };

    const downloadRecording = () => {
        const a = document.createElement('a');
        a.href = videoURL;
        a.download = 'recording.webm';
        a.click();
    };

    const crearMiniatura = (videoSrc) => {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.currentTime = 1; 

        video.onloadeddata = () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnail = canvas.toDataURL('image/png');
            setThumbnailURL(thumbnail);
        };
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
            <div className="  bg-white p-2 shadow-lg max-w-5xl w-full flex flex-col justify-center items-center h-[500px] max-h-[500px] gap-9 rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <div className='flex items-center gap-8'>
                    <video ref={videoRef} autoPlay muted={!videoURL} controls={!!videoURL} style={{ width: '400px', height: '300px', marginTop: '25px' }}>
                        {videoURL && <source src={videoURL} type="video/webm" />}
                    </video>

                </div>
                <div>
                    {isRecording ? (

                        <button className='bg-gray-600 h-14 w-14 flex items-center justify-center rounded-full' onClick={stopRecording}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                                <path d="M326.67-326.67h306.66v-306.66H326.67v306.66ZM480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
                            </svg>

                        </button>

                    ) : (
                        <div className='flex gap-4'>
                            <button className='bg-gray-600 h-14 w-14 flex items-center justify-center rounded-full' onClick={startRecording}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF">
                                    <path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                                </svg>
                            </button>
                            {videoURL && (
                                <button className='bg-gray-600 h-14 w-14 flex items-center justify-center rounded-full' onClick={restartRecording}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF">
                                        <path d="M480-80q-75 0-140.5-28T225-185q-49-49-77-114.5T120-440h60q0 125 87.5 212.5T480-140q125 0 212.5-87.5T780-440q0-125-85-212.5T485-740h-23l73 73-41 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735-695q49 49 77 114.5T840-440q0 75-28 140.5T735-185q-49 49-114.5 77T480-80Z" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}
                    {videoURL && (
                        <div>
                            <div className='' >
                                <form className="flex flex-col gap-4">
                                    <label className="flex flex-col">
                                        Name:
                                        <input type="text" className="p-2 border border-gray-300 rounded" />
                                    </label>
                                    <label className="flex flex-col">
                                        Email:
                                        <input type="email" className="p-2 border border-gray-300 rounded" />
                                    </label>
                                    <label className="flex flex-col">
                                        Message:
                                        <textarea className="p-2 border border-gray-300 rounded" rows="4"></textarea>
                                    </label>
                                    <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
                                </form>
                            </div>
                            <button onClick={downloadRecording} className='mt-4 bg-blue-600 text-white p-2 rounded'>Download Video</button>
                        </div>
                    )}
                    {thumbnailURL && (
                                <div>
                                    <h3>Thumbnail:</h3>
                                    <img src={thumbnailURL} alt="Thumbnail" style={{ width: '200px', height: '150px' }} />
                                </div>
                            )}
                </div>
            </div>
        </div>
    );
}