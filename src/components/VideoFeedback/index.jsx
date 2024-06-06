import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoFeedback = () => {
  
  const playerRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const { id } = useParams(); 
  const videoId = id; 
  const userId = '665f6b3da3f461502bc0c185'; 


  useEffect(() => {
    const fetchVideoUrl = async () => {
      console.log(videoId);
      try {
        const response = await axios.get(`http://localhost:3000/api/videos/${videoId}`);
        console.log(response);
        setVideoUrl(`http://localhost:3000/uploads/videos/${response.data.video}`);
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();

    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/feedback/${videoId}`);
        setFeedbacks(response.data);
        setMarkers(response.data.map(fb => ({ timestamp: fb.timestamp, comment: fb.comment })));
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, [videoId]);

  const handleAddMarker = () => {
    if (playerRef.current) {
      const current = playerRef.current.getCurrentTime();
      setCurrentTime(current);
      setActiveMarker(current);
      setMarkers([...markers, { timestamp: current, comment: '' }]);
    }
  };

  const handleSendFeedback = async () => {
    if (comment.trim() === '') {
      alert('Please enter a comment');
      return;
    }

    const newMarker = {
      videoId: id,
      userId: userId,
      timestamp: activeMarker,
      comment
    };
    try {
      const response = await axios.post(`http://localhost:3000/api/feedback/add/${videoId}`, newMarker);
      setFeedbacks([...feedbacks, response.data]);
      setMarkers(markers.map(marker =>
        marker.timestamp === activeMarker ? response.data : marker
      ));
      setComment('');
      setActiveMarker(null);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleMarkerClick = (time) => {
    if (playerRef.current) {
      playerRef.current.seekTo(time, 'seconds');
      setActiveMarker(time);
    }
  };

  const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };

  return (
    <div className="flex flex-col gap-7 h-[90%] rounded-3xl bg-white px-16 py-14">
      <div className="w-full flex flex-col justify-center items-center text-slate-800 font-black text-4xl">
        VIDEO FEEDBACK
      </div>

      <div className='w-full h-auto flex'>
        <div className='w-4/6 h-auto'>
          {videoUrl && (
            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              controls
              onProgress={handleProgress}
              width='100%'
              height='50%'
            />
          )}
          
          <div className='ml-[14px] mr-[14px]' style={{ marginTop: '0px', position: 'relative', height: '10px', background: '#eee' }}>
            {playerRef.current && markers.map((marker, index) => (
              <div
                className={`absolute w-5 h-5 video-marker ${marker.timestamp === activeMarker ? 'bg-red-500' : 'bg-blue-500'}`}
                key={index}
                onClick={() => handleMarkerClick(marker.timestamp)}
                style={{
                  left: `${(marker.timestamp / playerRef.current.getDuration()) * 100}%`,
                }}
                title={marker.comment}
              />
            ))}
          </div>
          <div className='flex mt-[10px] h-[60px] items-center'>  
            <button className='bg-[#2c7de1] text-white p-2 rounded-3xl px-4 hover:bg-[#053763]' onClick={handleAddMarker}>
              Add Feedback
            </button>
            {activeMarker !== null && (
              <div>
                <input
                  className='ml-6 bg-slate-200 w-[300px] border-2 border-gray-500 rounded-full h-[60px]'
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Enter your comment"
                  style={{ marginRight: '10px', padding: '5px' }}
                />
                <button onClick={handleSendFeedback} style={{ padding: '5px 10px' }}>
                  Send Feedback
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='w-2/6 max-h-[400px] bg-zinc-300 rounded-3xl px-10 pt-5 overflow-y-auto ml-[20px]'>
          <h3 className='text-white font-black text-2xl'>Feedback</h3>
          {feedbacks.map((feedback, index) => (
            <div
              onClick={() => handleMarkerClick(feedback.timestamp)}
              className={`bg-white rounded-md mt-4 p-4 shadow-md hover:shadow-lg ${feedback.timestamp === activeMarker ? 'bg-blue-100' : ''}`}
              key={index}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
            >
              <div style={{ color: 'blue' }}>
                {formatTime(feedback.timestamp)}
              </div>
              <div>{feedback.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoFeedback;
