import React from 'react';
import { Spinner, Row, Col } from 'reactstrap';
import './spinner.scss';

const AppSpinner = () => {
  return (
    <Row className="appspinner text-center d-flex align-items-center">
      <Col className="col-md-12">
        <Spinner size="lg" color="primary" />
      </Col>
    </Row>
  )
}

export default AppSpinner;