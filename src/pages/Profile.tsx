import minji from "../assets/minji.jpg";

const Profile = () => {
  return (
    <div
      id="about"
      className="w-full min-h-fit lg:min-h-[40rem] bg-[#F2F2F2] rounded-xl shadow-2xl flex flex-col overflow-hidden"
    >
      <div className="flex items-center p-3 border-b border-gray-200">
        <div className="flex gap-1.5 ml-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 md:p-12 lg:px-16 lg:py-0 gap-8 lg:gap-16">
        <div className="w-full max-w-[15rem] md:max-w-[18rem] lg:w-[25%] lg:max-w-[22rem] flex-shrink-1">
          <img
            src={minji}
            alt="프로필 사진"
            className="rounded-[2rem] w-full h-auto shadow-lg object-cover transition-all duration-300"
          />
        </div>

        <div className="flex-1 text-center lg:text-left min-w-[300px]">
          <div className="font-sora text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#679258] font-bold">
            About Me
          </div>

          <div className="mt-6 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] leading-relaxed text-gray-700 break-keep">
            <p>
              안녕하세요! 코드를 통해 사람들과 세상을 연결하는 프론트엔드 개발자
              <span className="font-bold text-[#679258]"> 김민지</span>입니다.
              <br className="hidden xl:block" />
              항상 새로운 기술을 배우고, 더 나은 사용자 경험을 위해 노력하고
              있어요.
            </p>
            <br />
            <p>
              개발 과정에서 마주하는 크고 작은 문제들을 해결하고 성장하는 데서
              즐거움을 느낍니다. 동료들과 적극적으로 소통하고 아이디어를 나누는
              가치를 중요하게 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
