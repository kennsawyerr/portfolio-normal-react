import Navbar from "./components/Navbar";
import PlayGround from "./components/PlayGround";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      {/* xui-md-font-sz-200 */}
      <div className="xui-container xui-mt-2 ">
        <p className="xui-font-sz-300 xui-bdr-w-thick xui-bdr-danger xui-mt-10 xui-w-[100%] xui-md-w-[75%] xui-lg-w-[50%]">
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
      <Projects/>
      <PlayGround/>
      
    </>
  );
}

export default App;

// video for S.Projects
// video for Richard
// teszwani design 
// find design for Doxpass
// find design images for Doxpass
// put the pages on adobe After Effects.
// make the video out of it
// collect 90k first
