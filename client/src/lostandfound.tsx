import './App.css';
import { Table } from '@mui/material';
import BasicButtons  from './lostnfound/button';
import DenseTable  from './lostnfound/table';
import SearchAppBar  from './lostnfound/searchbar';
import BottomAppBar  from './lostnfound/searchtable';
import Album from './lostnfound/album';
import ColumnsGrid from './lostnfound/grid';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <ColumnsGrid />
      <BottomAppBar />
    </div>
  );
}

export default App;
