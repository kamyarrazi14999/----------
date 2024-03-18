const ThemeButton = document.querySelector(".theme-button");

// ?تم های سایت خاموش و روشن می کننند و ذخیره می کنند حالت تم
/*  dark theme , light theme 
برای تغییر تم های روشن و خاموش استفاده میشود   */
ThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  ThemeButton.classList.toggle("dark-button");
  saveThemelocalstarge();
});
  /todo  we save them in local storage ذخیره میشود/;
  const saveThemelocalstarge = () => {
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

//? save update in local storage//
const updateTheme=() => {
  if (localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark-theme");
    ThemeButton.classList.add("dark-button");
  } else {
    document.body.classList.remove("dark-theme");
    ThemeButton.classList.remove("dark-button");
  }
};
//! when our site loaded
//userfunc: when our site loaded:   موقع  لود ماه و خورشید استفاده می شود
window.addEventListener("DOMContentLoaded",  updateTheme);
