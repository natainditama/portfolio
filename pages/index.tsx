import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="cb-demo">
        <div className="cb-demo-content">
          <div className="cb-demo-container">
            <div className="cb-demo-items">
              <div className="cb-demo-row">
                <div className="cb-demo-item" data-cursor="-color-red">
                  <div className="cb-demo-item-title">Set Color</div>
                  <div className="cb-demo-item-text" data-cursor="-color-green">
                    Any color via CSS class with <b>.setState(colorClass)</b> or
                    <b>[data-cursor=colorClass]</b> attribute
                  </div>
                </div>
                <div className="cb-demo-item" data-cursor-text="Hello!">
                  <div className="cb-demo-item-title">Set Text</div>
                  <div className="cb-demo-item-text">
                    Set text with <b>.setText(Text string)</b> or
                    <b>[data-cursor-text=Text string]</b> attribute
                  </div>
                </div>
                <div className="cb-demo-item" data-cursor="-opaque">
                  <div className="cb-demo-item-title">Exclusion mode</div>
                  <div className="cb-demo-item-text">
                    Exclusion or opaque mode with <b>.setState(-opaque)</b> or
                    <b>[data-cursor=-opaque]</b> attribute
                  </div>
                </div>
              </div>
              <div className="cb-demo-row">
                <div className="cb-demo-item" data-cursor="-lg">
                  <div className="cb-demo-item-title">Set size</div>
                  <div className="cb-demo-item-text">
                    Any size via CSS class with <b>.setState(sizeClass)</b> or
                    <b>[data-cursor=sizeClass]</b> attribute
                  </div>
                </div>
                <div
                  className="cb-demo-item"
                  data-cursor="-exclusion -lg"
                  data-cursor-stick="#cursor-stick-area"
                  data-magnetic
                >
                  <div className="cb-demo-item-title" id="cursor-stick-area">
                    Stick
                  </div>
                  <div className="cb-demo-item-text">
                    Set sticky cursor with <b>.setStick(element)</b> or
                    <b>[data-cursor-stick]</b> attribute
                  </div>
                </div>
                <div className="cb-demo-item" data-magnetic data-cursor="-opaque">
                  <div className="cb-demo-item-title">Magnetic</div>
                  <div className="cb-demo-item-text">
                    Magnetic via [data-magnetic] attribute and opaque style cursor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="h-screen"></section>
      <a href="#main-content" data-scroll-to="" data-scroll="">
        Back to Top
      </a>
    </>
  );
};

export default Home;
