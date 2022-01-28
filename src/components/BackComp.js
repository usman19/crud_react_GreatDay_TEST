import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export const BackComp = () => {
  return (
<Row>
        <Col>
            <Link to="/" >
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Button>
            </Link>
        </Col>
    </Row>

  );
};
