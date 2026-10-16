function DesktopMenuButtons(props){
  
  
    return (
      <>
        <div className="nav-btns hidden   relative  z-50 md:flex-center md:mr-4 w-32 h-10 gap-3">
          <img
            
            className="rounded-full ring-2  ring-white p-1  transition-transform hover:rotate-90 light:ring-black/50  "
            src="assets/svg/sun-svgrepo-com (11).svg"
            alt=""
            onClick={(event) => {
              document.documentElement.classList.toggle("light");
            }}
          />

          <p className=" text-center hidden md:inline font-header2  bg-white light:bg-gray-400  text-sm font-bold rounded-sm w-22 light:py-2   px-2 py-1.5   ">
            Hire-me
          </p>
        </div>
      </>
    );
  }


export default DesktopMenuButtons;
