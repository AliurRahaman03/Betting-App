import { useState } from "react"

export default function ImageSlider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="image-slider">
    <button onClick={goToPrevSlide}>Previous</button>
    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    <button onClick={goToNextSlide}>Next</button>
  </div>
  )
}
