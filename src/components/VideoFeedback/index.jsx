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
  const videoId = id 
  const userId = '665f6b3da3f461502bc0c185'; 

  useEffect(() => {
    const fetchVideoUrl = async () => {
      console.log(videoId)
      try {
        const response = await axios.get(`http://localhost:3000/api/videos/${videoId}`);
console.log(response)
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
      setCurrentTime(playerRef.current.getCurrentTime());
      setActiveMarker(currentTime);
      setMarkers([...markers, { timestamp: currentTime, comment: '' }]);
    }
  };

  const handleSendFeedback = async () => {
    if (comment.trim() === '') {
      alert('Please enter a comment');
      return;
    }

    const newMarker = {
      videoId,
      userId,
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
    }
  };

  const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, position: 'relative' }}>
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
        
        <div className='!bg-black' style={{ marginTop: '0px', position: 'relative', height: '10px', background: '#eee' }}>
          {playerRef.current && markers.map((marker, index) => (
            <div
              key={index}
              onClick={() => handleMarkerClick(marker.timestamp)}
              style={{
                position: 'absolute',
                top: 0,
                left: `${(marker.timestamp / playerRef.current.getDuration()) * 100}%`,
                backgroundColor: 'red',
                height: '10px',
                width: '2px',
                cursor: 'pointer',
              }}
              title={marker.comment}
            />
          ))}
        </div>

        <button onClick={handleAddMarker} style={{ marginTop: '10px' }}>
          Add Feedback
        </button>
        {activeMarker !== null && (
          <div style={{ marginTop: '10px' }}>
            <input
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
      <div style={{ flex: 0.3, marginLeft: '20px', maxHeight: '600px', overflowY: 'auto' }}>
        <h3>Feedback</h3>
        {feedbacks.map((feedback, index) => (
          <div key={index} style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <div onClick={() => handleMarkerClick(feedback.timestamp)} style={{ color: 'blue' }}>
              {formatTime(feedback.timestamp)}
            </div>
            <div>{feedback.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoFeedback;
