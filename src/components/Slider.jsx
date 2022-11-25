import { connect } from "react-redux";
import { useState } from "react";
function Slider(props) {

  //useEffect(() => slide(), [])
  function slide() {
    const slideContainer = document.querySelector(".container");
    const slide = document.querySelector(".slides");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const interval = 5000;
    let slides = document.querySelectorAll(".slide");
    let index = 0;
    let slideId;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = "first-clone";
    lastClone.id = "last-clone";

    slide.append(firstClone);
    slide.prepend(lastClone);
    var slideWidth;
    setInterval(() => {
      slideWidth = slides[0].clientWidth;
    }, 0);
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    const startSlide = () => {
      slideId = setInterval(() => {
        moveToNextSlide();
      }, interval);
    };

    const getSlides = () => document.querySelectorAll(".slide");
    slide.addEventListener("transitionend", () => {
      slides = getSlides();
      if (slides[index].id === firstClone.id) {
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
      }

      if (slides[index].id === lastClone.id) {
        slide.style.transition = "none";
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    });
    const moveToNextSlide = () => {
      slides = getSlides();
      if (index >= slides.length - 1) return;
      index++;
      slide.style.transition = ".5s ease-out";
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    };

    const moveToPreviousSlide = () => {
      if (index <= 0) return;
      index--;
      slide.style.transition = ".5s ease-out";
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    };

    slideContainer.addEventListener("mouseenter", () => {
      clearInterval(slideId);
    });

    slideContainer.addEventListener("mouseleave", startSlide);
    nextBtn.addEventListener("click", moveToNextSlide);
    prevBtn.addEventListener("click", moveToPreviousSlide);

    startSlide();
  }
  const [photos, setPhotos] = useState([
    {
      title: "dubai",
      path: "../img/Slider/slideDubai.svg"
    },
    {
      title: "grece",
      path: "../img/Greece/Greece1.svg"
    },
    {
      title: "grece",
      path: "../img/Greece/Greece2.svg"
    },
  ])
  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="slides">
            {
              photos.map((photo) => (
                <div className="slide">
                  <img src={photo.path} alt={photo.title} />
                </div>
              ))
            }

          </div>
          <div className="slide-controls">
            <button id="prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button id="next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Slider);