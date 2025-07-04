import Navbar from "./components/Navbar";
import PlayGround from "./components/PlayGround";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* features i need */}

      {/* 
    1. card hover effect to blur each cards
    2. image slider inbuilt in the stylexui
    3. I cant see flex gap in stylexui
    4. 
    
    
    
    */}
      <Navbar />
      {/* xui-md-font-sz-200 */}
      <div className="xui-container xui-mt-2 ">
        <p className="xui-font-sz-150 xui-md-font-sz-300 xui-mt-10 xui-w-[100%] xui-md-w-[75%] xui-lg-w-[50%]">
          I'm Kehinde, a web developer creating websites that feel like magic
          and convert like mad. 😎
        </p>

        <p className="xui-font-sz-100 xui-mt-3">
          "I wholeheartedly endorse Kehinde and his expertise.{" "}
          <span className="">I go lie for you?</span>"{" "}
        </p>
        <p className="xui-font-sz-90 xui-text-fade">
          Richard Gigi, cofounder of Xnyder
        </p>
      </div>
      <Projects />
      <PlayGround />
      <Footer />
    </>
  );
}

export default App;

