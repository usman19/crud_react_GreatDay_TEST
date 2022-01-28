import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUsers } from "../actions/userAction";

const handleClick = (dispatch, id) => {
  
    swal({
      title: "Apakah Anda yakin akan menghapus data ini ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteUsers(id))
        swal("Data User Sukses dihapus", {
          icon: "success",
        });
      } else {
        swal("Data gagal dihapus");
      }
    });
  }




const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const mapStateToProps = (state) => {
    return {
        getUsersList: state.users.getUsersList,
        errorUsersList : state.users.errorUsersList
    };
  };

 const TabelComp = (props) => {
    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
            return { width: "5%" };
        },
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true,
    }, {
        dataField: 'first_name',
        text: 'First Name',
        sort: true,
        filter: textFilter(),
        headerStyle: () => {
            return { width: "10%" };
        },
    },
    {
        dataField: 'last_name',
        text: 'Last Name',
        sort: true
    },
    {
        dataField: 'avatar',
        text: 'Avatar',
        sort: true
    },
    {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={"detail/" + row.id} >
                        <Button color="dark" className="mr-2">
                            <FontAwesomeIcon icon={faInfo} /> 
                        </Button>
                    </Link>
    
                    <Link to={"edit/" + row.id} >
                        <Button color="dark" className="mr-2">
                            <FontAwesomeIcon icon={faEdit} /> 
                        </Button>
                    </Link>
    
                    <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
                  <FontAwesomeIcon icon={faTrash} /> 
                </Button>
                </div>
            );
        },
    }
    ];
    return (
        <Container>
            <hr />
            <Row>
                <Col>
                    
                        <Link to="/create" >
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faPlus} /> Create
                            </Button>
                        </Link>
                    
                </Col>
            </Row>
            <hr />
            
        { props.getUsersList ? (
           

            <BootstrapTable
                bootstrap4
                keyField='id'
                data={props.getUsersList}
                columns={columns}
                defaultSorted={defaultSorted}
                pagination={paginationFactory()}
                filter={filterFactory()}
            /> ): null }


        </Container>
    );
};

export default connect(mapStateToProps, null)(TabelComp);