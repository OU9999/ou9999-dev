const VideoWithAlt: React.FC<HTMLVideoElement> = (props) => {
  return (
    <div className="not-prose relative my-12 flex w-full flex-col items-start justify-center md:my-14">
      <video
        className="h-auto w-full rounded-lg"
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
