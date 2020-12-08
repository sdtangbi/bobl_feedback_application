import React from "react";
import { Row, Col, Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import ScoreBoard from "../score_board/score_board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./givefeedback.css";

const GiveFeeds = (props) => {
    let list = (
        <ul type='none' className='p-0'>
            {props.data.detail.map((x, i) => {
                return (
                    <li key={i}>
                        <Row style={{ margin: "3px 0" }}>
                            <Col lg={9} md={9} sm={9} xs={12}>
                                {x.content}
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={12}>
                                <span className='scoreboard-parent-div' style={{ float: "right" }}>
                                    <ScoreBoard qid={x.id} data_info={props.data} className={(x.id, "score")} scoreUpdate={props.scoreUpdate} review_or_feed={true} />
                                </span>
                            </Col>
                        </Row>
                        <hr />
                    </li>
                );
            })}
        </ul>
    );
    return (
        <React.Fragment>
            <Card className='questionnaire-card'>
                <Card.Body>
                    <Card.Title className='questionnaire-title'>
                        <h3>{props.header}</h3>
                    </Card.Title>

                    <div className='competency-category'>
                        <h5>
                            {props.index + 1}. {props.data.title} &nbsp;&nbsp;
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        {
                                            <p style={{ textAlign: "left" }}>
                                                {props.data.explanation.split("<br/>").map((v, i) => {
                                                    return <p key={i}>{v}</p>;
                                                })}
                                            </p>
                                        }
                                    </Tooltip>
                                }
                            >
                                <FontAwesomeIcon icon={faQuestionCircle} id='title-explanation' />
                            </OverlayTrigger>
                        </h5>
                    </div>

                    <div className='questionnaire-detail'> {list} </div>
                    {(props.pIndex === 0) & (props.index === 0) ? (
                        ""
                    ) : (
                        <Button className='btn-secondary btn-sm questionnaire-previous' onClick={props.decrementIndex} style={{ float: "left" }}>
                            Previous
                        </Button>
                    )}
                    {props.data.detail[0].id !== props.laztId ? (
                        <Button className='btn-primary btn-sm questionnaire-next-submit' onClick={() => props.incrementIndex("next")} style={{ float: "right" }}>
                            Next
                        </Button>
                    ) : (
                        <Button className='btn-warning btn-sm questionnaire-next-submit ' onClick={() => props.incrementIndex("review")} style={{ float: "right" }}>
                            Review
                        </Button>
                    )}
                </Card.Body>
            </Card>
            <br />
            <span>
                Satisfactory : <span className='badge badge-info'>1</span>
                &nbsp;&nbsp; Good : <span className='badge badge-info'>2</span>
                &nbsp;&nbsp; Very Good : <span className='badge badge-info'>3</span>
                &nbsp;&nbsp; Excellent : <span className='badge badge-info'>4</span>
                &nbsp;&nbsp; Outstanding : <span className='badge badge-info'>5</span>
            </span>
        </React.Fragment>
    );
};

export default GiveFeeds;
