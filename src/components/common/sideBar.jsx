import React from "react";

const sideBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <>
      <Button onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </Button>
    </>
  );
};

export default sideBar;
