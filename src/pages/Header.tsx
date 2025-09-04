const Header = () => {
  return (
    <div className="px-[3rem] py-[2rem] flex items-center justify-between gap-[1rem]">
      <div className="font-extrabold text-[2.5rem] text-[#679258]">Meanzi</div>
      <div className="flex items-center gap-[1rem] text-[1.5rem] cursor-pointer">
        <p>ABOUT</p>
        <p>SKILLS</p>
        <p>PROJECTS</p>
        <p>CONTACT</p>
      </div>
    </div>
  );
};

export default Header;
