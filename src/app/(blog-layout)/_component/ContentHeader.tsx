import Image from "next/image";

const ContentHeader = () => {
  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center bg-content-header">
      <div className="w-276 py-10 flex">
        <div className="w-96 h-72 relative overflow-hidden rounded-xl">
          <Image alt="modern-js" src="/modern-js.PNG" fill />
        </div>
        <p>안녕하세요. 개발자 오유진입니다.</p>
        <p>노력과 고민을 담아서</p>
      </div>
    </div>
  );
};

export default ContentHeader;
