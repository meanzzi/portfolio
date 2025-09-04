import github_line from "../assets/github_line.svg";
import email_line from "../assets/email_line.svg";

const Contact = () => {
  return (
    <div className="my-[5rem] mx-[6rem]">
      <div className="font-bold text-[2rem] text-center mb-[3rem]">CONTACT</div>
      <div className="">
        <div className="flex items-center justify-center gap-2 mb-[1rem]">
          <img src={github_line} alt="깃허브 링크" className="size-[2rem]" />
          <p className="cursor-pointer text-[1.3rem]">meanzi.kim@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={email_line} alt="이메일 링크" className="size-[2rem]" />
          <p className="cursor-pointer text-[1.3rem]">meanzzi</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
