import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const NewsCarousel = () => {
  const sliderRef = useRef();

  useEffect(() => {
    const rotate = () => {
      const lastChild = $(sliderRef.current).children('div:last-child').clone();
      $(sliderRef.current).children('div').removeClass('firstSlide');
      $(sliderRef.current).children('div:last-child').remove();
      $(sliderRef.current).prepend(lastChild);
      $(lastChild).addClass('firstSlide');
    };

    const interval = setInterval(() => rotate(), 4000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <Container>
      <Slider ref={sliderRef}>
        {images.map((image, index) => (
          <Slide
            key={index}
            className={`box${index + 1}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </Slider>
    </Container>
  );
};

const images = [
  'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Allows vertical scroll */
  overflow-x: hidden; /* Removes horizontal scroll */
  margin-top: -310px;
  
`;

const Slider = styled.div`
  height: 400px;
  width: 150vw;
  display: flex;
  perspective: 1000px;
  position: relative;
  align-items: center;
`;

const Slide = styled.div`
  overflow: hidden;
  border-radius: 20px;
  transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  position: absolute;
  background-size: cover;
  background-position: center center;

  &:nth-child(1), &:nth-child(7) {
    width: 100vh;
    height: 35vh;
    transform: scale(0.2) translate(-50%, -50%);
    top: 10%;
    z-index: 1;
  }

  &:nth-child(2), &:nth-child(6) {
    width: 100vh;
    height: 35vh;
    transform: scale(0.4) translate(-50%, -50%);
    top: 20%;
    z-index: 2;
  }

  &:nth-child(3), &:nth-child(5) {
    width: 100vh;
    height: 35vh;
    transform: scale(0.6) translate(-50%, -50%);
    top: 30%;
    z-index: 3;
  }

  &:nth-child(4) {
    width: 35vw;
    height: 35vh;
    transform: scale(1) translate(-50%, -50%);
    top: 50%;
    z-index: 4;
  }

  &:nth-child(1) { left: -13%; }
  &:nth-child(2) { left: -5%; }
  &:nth-child(3) { left: 10%; }
  &:nth-child(4) { left: 50%; }
  &:nth-child(5) { left: 71%; }
  &:nth-child(6) { left: 85%; }
  &:nth-child(7) { left: 100%; }

  &.firstSlide {
    animation: firstChild 1s;
  }

  @keyframes firstChild {
    0% { left: 100%; transform: scale(0.2) translate(-50%, -50%); }
    100% { left: -13%; transform: scale(0.2) translate(-50%, -50%); }
  }
`;

export default NewsCarousel;
