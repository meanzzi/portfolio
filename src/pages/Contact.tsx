import github_line from "../assets/github_line.svg";
import email_line from "../assets/email_line.svg";

const Contact = () => {
  return (
    <div className="mt-[5rem] mx-[6rem] pb-[5rem]">
      <div className="font-sora text-[3rem] text-center mb-[3rem] text-[#679258]">
        CONTACT
      </div>
      <div className="">
        <div className="flex items-center justify-center gap-2 mb-[1rem]">
          <img src={github_line} alt="깃허브 링크" className="size-[2rem]" />
          <a
            href="https://github.com/meanzzi"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[1.3rem]"
          >
            meanzzi
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={email_line} alt="이메일 링크" className="size-[2rem]" />
          <a
            href="mailto:meanzi.kim@gmail.com"
            className="cursor-pointer text-[1.3rem] hover:underline"
          >
            meanzi.kim@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
