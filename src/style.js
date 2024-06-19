const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    title: "font-poppins font-bold md:text-[58px] text-[45px] text-black xs:leading-[65.8px] leading-[66.8px] w-full md:mt-5 mt-10",
    paragraph: "font-poppins font-normal text-[#999] text-[18px] leading-[30.8px]",
    subtitle: "text-[25px] font-medium text-orange",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "md:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-24 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;