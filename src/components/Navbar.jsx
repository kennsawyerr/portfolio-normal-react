function Navbar(){
    return (
      <>
        <nav
          class="xui-container xui-navbar xui-navbar-blurred xui-bg-black xui-text-white"
          xui-style="2"
          xui-menu="2"
        >
          <div class="brand">
            <span>Kehinde</span>
          </div>
          <div class="links" xui-set="left">
            <div class="main">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div class="fixed">
              <ul>
                <li>
                  <a href="#" class="xui-btn xui-btn-primary" mailto="kensawyerr@gmail.com">
                    Let's Talk
                  </a>
                </li>
              </ul>
            </div>
            <div class="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;