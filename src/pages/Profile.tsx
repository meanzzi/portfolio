import minji from "../assets/minji.jpg";

const Profile = () => {
  return (
    <div
      id="about"
      className="w-full min-h-[30rem] lg:min-h-[40rem] bg-[#F2F2F2] rounded-xl shadow-2xl flex flex-col"
    >
      <div className="flex items-center p-3">
        <div className="px-1">
          <span className="w-3 h-3 md:w-4 md:h-4 rounded-full inline-block bg-red-500 "></span>
        </div>
        <div className="px-1">
          <span className="w-3 h-3 md:w-4 md:h-4 rounded-full inline-block bg-yellow-400 "></span>
        </div>
        <div className="px-1">
          <span className="w-3 h-3 md:w-4 md:h-4 rounded-full inline-block bg-green-500 "></span>
        </div>
      </div>

      <div className="flex-1 overflow-auto flex flex-col lg:flex-row items-center lg:items-start p-6 md:p-12 lg:p-0">
        <img
          src={minji}
          alt="프로필 사진"
          className="rounded-[2rem] w-[15rem] md:w-[18rem] lg:w-[20rem] lg:ml-[8rem] lg:mt-[3rem] lg:mb-[5rem] shadow-lg"
        />

        <div className="mt-8 lg:mt-[3rem] lg:ml-[5rem] lg:mb-[5rem] text-center lg:text-left">
          <div className="font-sora text-[2rem] md:text-[3rem] text-[#679258] font-bold">
            About Me
          </div>

          <div className="mt-4 md:mt-[2rem] text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] lg:mr-[8rem] leading-relaxed">
            <p>
              안녕하세요! 코드를 통해 사람들과 세상을 연결하는 프론트엔드 개발자
              김민지입니다. <br className="hidden md:block" />
              항상 새로운 기술을 배우고, 더 나은 사용자 경험을 만들기 위해
              끊임없이 노력하고 있어요.
            </p>
            <br />
            <p>
              개발 과정에서 마주하는 크고 작은 문제들을 해결하고, 끊임없이
              배우며 성장하는 데서 즐거움과 열정을 느낍니다! 혼자보다는 함께
              만들어가는 가치를 믿기에 동료들과 적극적으로 소통하고 아이디어를
              나누는 것을 가장 중요하게 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
