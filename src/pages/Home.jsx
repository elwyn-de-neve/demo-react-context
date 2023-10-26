import content from "../content/content.json";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const { isAuth } = useContext(AuthContext);
  const { title, paragraph, welcome } = content[language].homepage;

  return (
    <main>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {isAuth && <p>{welcome}</p>}
    </main>
  );
};

export default Home;
