import React from "react";

import UserCard from "../components/UserCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import PersonOne from "../files/person_one.jpg"
import PersonTwo from "../files/person_two.jpg";
import PersonThree from "../files/person_three.jpg";

function Providers() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250,
      }}
    >
      <Carousel
        style={{
          alignSelf: "center",
        }}
        showStatus={false}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <UserCard image={PersonOne} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <UserCard image={PersonTwo} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <UserCard image={PersonThree} />
        </div>
      </Carousel>
    </div>
  );
}

export default Providers;
