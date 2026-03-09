const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 pt-6 md:px-[3rem] md:pt-[3rem] backdrop-blur-sm bg-white/30">
      <div className="flex items-center justify-end gap-4 md:gap-[2rem] text-[1rem] md:text-[1.2rem] font-medium cursor-pointer">
        <a
          href="#about"
          className="relative hover:text-[#32472b] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#32472b] hover:after:w-full after:transition-all"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="relative hover:text-[#32472b] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#32472b] hover:after:w-full after:transition-all"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="relative hover:text-[#32472b] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#32472b] hover:after:w-full after:transition-all"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="relative hover:text-[#32472b] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#32472b] hover:after:w-full after:transition-all"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Header;
