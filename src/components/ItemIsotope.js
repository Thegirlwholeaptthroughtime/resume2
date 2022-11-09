import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              Works
            </label>
          </div>
          {/*   <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Video
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-music")}`}
              onClick={handleFilterKeyChange("f-music")}
              data-text="Music"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-music" />
              Music
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-links")}`}
              onClick={handleFilterKeyChange("f-links")}
              data-text="Links"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-links" />
              Links
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-image")}`}
              onClick={handleFilterKeyChange("f-image")}
              data-text="Image"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-image" />
              Image
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-gallery")}`}
              onClick={handleFilterKeyChange("f-gallery")}
              data-text="Gallery"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-gallery" />
              Gallery
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-content")}`}
              onClick={handleFilterKeyChange("f-content")}
              data-text="Content"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-content" />
              Content
            </label>
          </div> */}
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-gallery">
          <div className="image">
            <a href="#gallery-1" className="has-popup-gallery hover-animated">
              <img src="images/work1.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width pj1">
                  <span className="vertical-center">
                    <span className="project_desc">
                      <div>
                        <span className="">2022.07 - 2022.09</span>
                        <span className="">신세계 클론코딩</span>
                        <span className="">
                          HTML5, CSS3, Java Script, React
                        </span>
                      </div>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-1" className="mfp-hide">
              <a href="images/work1.jpg" />
              <a href="images/work2.jpg" />
              <a href="images/work3.jpg" />
              <a href="images/work4.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-links">
          <div className="image">
            <a
              href="https://google.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/work3.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width pj2">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="project_desc">
                      <div>
                        <span className="">2021.10 - 2022.03</span>
                        <span className="">동화뉴텍 웹사이트 리뉴얼</span>
                        <span className="">HTML5, CSS3, Java Script</span>
                      </div>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-gallery">
          <div className="image">
            <a href="#gallery-2" className="has-popup-gallery hover-animated">
              <img src="images/work5.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width pj4">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="project_desc">
                      <div>
                        <span className="">2022.09 - 2022.11</span>
                        <span className="">음원 기반 SNS 서비스</span>
                        <span className="">
                          HTML5, CSS3, Java Script, Next js, AWS
                        </span>
                      </div>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-2" className="mfp-hide">
              <a href="images/work5.jpg" />
              <a href="images/work1.jpg" />
              <a href="images/work2.jpg" />
              <a href="images/work3.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-music">
          <div className="image">
            <a
              href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
              className="has-popup-music hover-animated"
            >
              <img src="images/work6.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width pj3">
                  <span className="vertical-center">
                    <span className="icon fas fa-music" />
                    <span className="project_desc">
                      <div>
                        <span className="">2021.11 - 2021.12</span>
                        <span className="">미가메디칼 전자 카탈로그</span>
                        <span className="">HTML5, CSS3, Java Script</span>
                      </div>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
