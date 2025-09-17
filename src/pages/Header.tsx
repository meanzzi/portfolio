const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-[3rem] pt-[3rem] backdrop-blur-sm">
      <div className="flex items-center justify-end gap-[1rem] text-[1.2rem] cursor-pointer">
        <a
          href="#about"
          className="hover:text-[#925858] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#925858] after:transition-all "
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="hover:text-[#925858] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#925858] after:transition-all"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="hover:text-[#925858] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#925858] after:transition-all"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="hover:text-[#925858] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#925858] after:transition-all"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Header;
