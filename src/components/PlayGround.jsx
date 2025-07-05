const PlayGround = () => {
  return (
    <>
      <div className="xui-container" style={{ overflow: "hidden" }}>
        <h1>Playground</h1>

        <h4>See some of my free time designs below</h4>

        <section
          className="xui-d-flex xui-flex-dir-row xui-flex-wrap-nowrap xui-py-1  xui-overflow-hidden"
          style={{
            animation: "slideRight 60s linear infinite",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {[1, 2].map((set) => (
            <div key={set} style={{ display: "flex", gap: "0.5rem" }}>
              <div className="xui-mx-1">
                <img
                  src="/images/1.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1">
                <img
                  src="/images/2.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1">
                <img
                  src="/images/4.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1">
                <img
                  src="/images/3.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1">
                <img
                  src="/images/2.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
              <div className="xui-mx-1">
                <img
                  src="/images/1.png"
                  alt="Image 1"
                  className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
                />
              </div>
            </div>
          ))}
        </section>
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
