import React from 'react';
import { Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";

 <FontAwesomeIcon icon={faInfo} />

 const mapStateToProps = (state) => {
    return {
        judul: state.users.judul
    };
  };


 const Tampilan = (props) => {
  return (
  <div>
      <Container>
          <h1>
              {props.judul}
          </h1>
          <Button><FontAwesomeIcon icon={faInfo} /> Clik Here</Button>
      </Container>
  </div>
  );
};

export default connect(mapStateToProps, null)(Tampilan);