import React from "react";

import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ProjectCarousel from '../components/project_carousel.js';

const Project = (props) => (
    <>
        <h2 style={{textAlign:!props.reverse ? 'left' : 'right'}}>{props.title}</h2>
        <div style={{textAlign:!props.reverse ? 'left' : 'right'}}>
            {props.icons && props.icons.map((icon,i)=>(
                <OverlayTrigger
                    key={icon+i}
                    placement="bottom"
                    delay={{ show: 25, hide: 50 }}
                    overlay={
                        <Tooltip id="button-tooltip">
                            {icon.name}
                        </Tooltip>
                    }>
                    <img src={"/"+icon.file} className="logosm"></img>
                </OverlayTrigger>
            ))}
        </div>
        <Row>
            <Col md={{ order: !props.reverse ? 'first' : 'last' }} className="preview">
                <ProjectCarousel reverse={props.reverse} folder={props.imagesfolder} images={props.images}></ProjectCarousel>
            </Col>
            <Col md={{ order: !props.reverse ? 'last' : 'first' }} className="about">
                <b>{props.title} </b>{props.description && props.description.map((title,i)=>(
                    <div style={{display:'inline'}} key={i}>{title}<br/></div>
                ))}
            </Col>
        </Row>
    </>
)
export default Project;
