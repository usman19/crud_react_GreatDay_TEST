import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, ToolkitContext } from 'react-bootstrap-table2-toolkit';
import { Container } from 'reactstrap';

const { SearchBar } = Search;
const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
    return { width: "5%" };
  },
}, {
  dataField: 'nama',
  text: 'Nama',
  sort: true
}, {
  dataField: 'alamat',
  text: 'Alamat',
  sort: true
},
{
  dataField: 'nohp',
  text: 'Nomor HP',
  sort: true
},


];


const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

export const TabelComp = (props) => {
  return (
    <Container>

      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
      
        search
      >
        {
          props => (
            <div>
              <h3>Input something at below input field:</h3>
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>
    </Container>
  );
};

export default ToolkitContext;