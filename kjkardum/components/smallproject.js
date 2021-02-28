import React from "react";

import { Row,Col, Modal, Button } from 'react-bootstrap';

const SmallProject = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
        return (
        <Col md={3}>
            <div className="smallproject-box" onClick={()=>setModalShow(true)}>
                <img src={props.images.main}></img>
                <div className="hoverdiv shadow1">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="features">
                        {props.skills.map((item,i)=>(
                            <span key={i} className="feature">{item.short}</span>
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src={props.images.main} className="fullwidthimg"></img>
                            <img src={props.images.secondary} className="fullwidthimg"></img>
                        </Col>
                        <Col md={6} className="modal-rightcol">
                            <h3>{props.title}</h3>
                            <div className="skills">
                                {props.skills.map((item,i)=>(
                                    <div className="skillPill" key={i}>{item.name}</div>
                                ))}
                            </div>
                            <div className="sp-description">
                            <b>{props.title} </b>{props.description && props.description.map((title,i)=>(
                                <div style={{display:'inline'}} key={i}>{title}<br/></div>
                            ))}
                            </div>
                            <Button variant="closemodal sm-modal-close" onClick={() => setModalShow(false)}>
                                Close
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Col>
    )
}

export default SmallProject;
