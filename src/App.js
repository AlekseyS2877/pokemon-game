import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import bgImg1 from "./img/bg1.jpg";
import bgImg2 from "./img/bg3.jpg";

function App() {
   const bgColor = "red";
   return (
      <React.Fragment>
         <Header title="Заголовок" descr="Описание" />
         <Layout title="Первый блок" descr="Описание первого блока" urlBg={bgImg1} />
         <Layout title="Второй блок" descr="Описание второго блока" colorBg={bgColor} />
         <Layout title="Третий блок" descr="Описание третьего блока" urlBg={bgImg2} />
         <Footer />
      </React.Fragment>
   );
}

export default App;
