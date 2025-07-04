const Projects = () => {
  return (
    <>
      <div className="xui-container xui-my-10 ">
        <h1>Selected Projects</h1>
        <div className="xui-my-2 xui-d-grid xui-grid-col-1 xui-grid-row-2 xui-grid-gap-1-half xui-md-grid-col-2">
          <div className="">
            <img
              src="/images/1.png"
              alt="Image 1"
              className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
            />
          </div>
          <div className="xui-alert-info">
            <img
              src="/images/2.png"
              alt="Image 1"
              className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
            />
          </div>
          <div className="">
            <img
              src="/images/3.png"
              alt="Image 1"
              className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
            />
          </div>
          <div className="">
            <img
              src="/images/4.png"
              alt="Image 1"
              className="xui-object-fit-contain  xui-h-fluid-100 xui-w-fluid-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
