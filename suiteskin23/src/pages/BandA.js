import React from "react";
import CustomDiv from "../components/CustomDiv";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"
import NavigationBar from "../components/NavigationBar";

const BandA = () => {
    return (
        <Container fluid>
            <NavigationBar />
            <div id="bggggg4">
                <Row>
                    <Col size="md-4" />
                    <Col size="md-8">
                        <CustomDiv id="banner">
                            <h1>Suite Skin by Lindsey</h1>
                        </CustomDiv>
                    </Col>

                </Row>
                <Row>
                    <Col size="md-4" />
                    <Col size="md-8">
                        <CustomDiv id="servicesmaindiv">
                            <h2>Before and After</h2>
                        </CustomDiv>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div class="footer">
                            C Suite Skin by Lindsey
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default BandA;