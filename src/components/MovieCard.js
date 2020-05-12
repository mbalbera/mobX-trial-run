import React from "react";
import { Card, Image } from "semantic-ui-react";

const MovieCard = (props) => (
  <Card style={{ width: "25%", height: "12%" }}>
    <Image
      style={{ width: "960px", height: "auto" }}
      src={props.img}
      wrapped
      ui={true}
      centered={true}
    />
    <Card.Content style={{height:'auto'}}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className="date">{props.year} </span>
      </Card.Meta>
      <Card.Description>{props.summary}</Card.Description>
    </Card.Content>
  </Card>
);

export default MovieCard;
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
