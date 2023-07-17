"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
import Comments from "../Comments/Comments";

const Carousel = (props: { page: number }) => {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          snap: true,
          perPage: props.page,
          perMove: 1,
          interval: 2000,
          easing: "ease-in-out",
          autoplay: true,
          pauseOnHover: true,
          pauseOnFocus: false,
          resetProgress: false,
          pagination: false,
        }}
      >
        <SplideSlide>
          <Comments
            label="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
            name="Chealsea Morgan"
            rank="CEO at Subway"
            image="/chelsea.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis."
            name="Nick Cave"
            rank="CMO ot Nokia"
            image="/nick.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo."
            name="Lana Rosenfield"
            rank="Senior VP ot Pinterest"
            image="/lana.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
            name="Chealsea Morgan"
            rank="CEO at Subway"
            image="/chelsea.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis."
            name="Nick Cave"
            rank="CMO ot Nokia"
            image="/nick.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo."
            name="Lana Rosenfield"
            rank="Senior VP ot Pinterest"
            image="/lana.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
            name="Chealsea Morgan"
            rank="CEO at Subway"
            image="/chelsea.png"
          />
        </SplideSlide>
        <SplideSlide>
          <Comments
            label="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis."
            name="Nick Cave"
            rank="CMO ot Nokia"
            image="/nick.png"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
