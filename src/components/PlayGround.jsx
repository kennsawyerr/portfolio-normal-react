import Marquee from "react-fast-marquee";
const PlayGround = () => {
  return (
    <>
      <div
        className="xui-container"
        style={{
          overflow: "hidden",
          border: "1px solid red",
        }}
      >
        {/* 184450555 */}
        <h1>Playground</h1>

        <h4>See some of my free time designs below</h4>

        <Marquee pauseOnHover={true}>
         
            <div className="xui-d-grid  xui-grid-col-5 xui-py-1 xui-grid-gap-1 xui-overflow-hidden">
              <div className="xui-mx-1 xui-w-fluid-100 xui-h-fluid-100 xui-bdr-w-2 xui-bdr-s-solid xui-bdr-blue ">
                <img
                  src="/images/1.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              {/*  */}
              <div className="xui-mx-1  xui-bdr-w-2 xui-bdr-s-solid xui-bdr-blue ">
                <img
                  src="/images/2.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1  xui-bdr-w-2 xui-bdr-s-solid xui-bdr-blue">
                <img
                  src="/images/4.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1  xui-bdr-w-2 xui-bdr-s-solid xui-bdr-blue ">
                <img
                  src="/images/3.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1  xui-bdr-w-2 xui-bdr-s-solid xui-bdr-blue">
                <img
                  src="/images/2.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
            </div>
        
        </Marquee>
        <style>{`
          @keyframes slideRight {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PlayGround;
