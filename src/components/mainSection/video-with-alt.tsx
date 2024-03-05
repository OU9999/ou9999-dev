const VideoWithAlt: React.FC<HTMLVideoElement> = (props) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <video
        className="rounded-lg"
        width={props.width}
        height={props.height}
        controls
        autoPlay
        muted
        preload="none"
        playsInline
      >
        <source src={props.src} type="video/mp4" />
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
