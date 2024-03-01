const VideoWithAlt: React.FC<HTMLVideoElement> = (props) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <video
        width={props.width}
        height={props.height}
        controls
        autoPlay
        preload="none"
      >
        <source src={props.src} type="video/webm" />
      </video>
      {props.ariaLabel && (
        <p className="my-1 text-gray-400 dark:text-gray-600 text-sm ">
          {props.ariaLabel}
        </p>
      )}
    </div>
  );
};

export default VideoWithAlt;
