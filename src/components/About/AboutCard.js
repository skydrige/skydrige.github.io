import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { LuGamepad2 } from "react-icons/lu";
import { RiStockLine } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokesh Koppineedi </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently a student at Vignan Institute of Technology and Science, Vadlamudi, Guntur.
            <br />
            I have pursuing my B.Tech in <span className="purple"> Cyber Security </span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games <LuGamepad2 />
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading <RiStockLine />
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series <BiMoviePlay />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never End With What You Are Today!"{" "}
          </p>
          <footer className="blockquote-footer">skydrige</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
