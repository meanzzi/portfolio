import minji from "../assets/minji.jpg";

const Profile = () => {
  return (
    <div className="w-full h-[40rem] bg-[#F2F2F2] rounded-xl shadow-2xl flex flex-col">
      <div className="flex items-center p-3">
        <div className="px-1">
          <span className="w-4 h-4 rounded-full inline-block bg-red-500 "></span>
        </div>
        <div className="px-1">
          <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 "></span>
        </div>
        <div className="px-1">
          <span className="w-4 h-4 rounded-full inline-block bg-green-500 "></span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex">
          <img
            src={minji}
            alt="프로필 사진"
            className="rounded-[2rem] w-[20rem] ml-[8rem] my-[5rem]"
          />
          <div className="ml-[3rem] my-[5rem]">
            <div className="font-sora text-[3rem] text-[#679258]">About Me</div>
            <div className="mt-[2rem]">
              <p>안녕하세요! 프론트엔드 개발자 김민지입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
