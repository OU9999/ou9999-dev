const VideoWithAlt: React.FC<HTMLVideoElement> = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
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
        <p className="my-1 text-sm text-google-muted">{props.ariaLabel}</p>
      )}
    </div>
  );
};

export { VideoWithAlt };
