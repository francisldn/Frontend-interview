import './App.css';
import {explorer} from './FolderData/folderData';
import Folder from './Component/Folder';

function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
