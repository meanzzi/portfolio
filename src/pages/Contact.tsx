import github_line from "../assets/github_line.svg";
import email_line from "../assets/email_line.svg";

const Contact = () => {
  return (
    <div id="contact" className="mt-[5rem] px-4 md:px-[6rem] pb-[5rem]">
      <div className="font-sora text-[2.5rem] md:text-[3rem] text-center mb-[2rem] md:mb-[3rem] text-[#679258] font-bold">
        CONTACT
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mb-[1.5rem]">
          <img
            src={github_line}
            alt="깃허브 링크"
            className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]"
          />
          <a
            href="https://github.com/meanzzi"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[1.1rem] md:text-[1.3rem] hover:text-[#679258] transition-colors"
          >
            meanzzi
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <img
            src={email_line}
            alt="이메일 링크"
            className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]"
          />
          <a
            href="mailto:meanzi.kim@gmail.com"
            className="cursor-pointer text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] hover:underline break-all text-center"
          >
            meanzi.kim@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
