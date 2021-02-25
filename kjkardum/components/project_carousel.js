import React from "react";

import { Carousel } from 'react-bootstrap';

const ProjectCarousel = (props) => (
    <Carousel className={"project-carousel shadow1"+ (props.reverse ? " carousel-right" : "")}>
        {props.images && props.images.map((img,i)=>(
            <Carousel.Item key={img+i}>
                    <img src={props.folder+img} className="project-thumbnail hover-3d"></img>
            </Carousel.Item>
        ))}
    </Carousel>
)
export default ProjectCarousel;


