import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div style={{ margin: '10px 0px'}}>
      Current value: {props.value}.
    </div>
  )
}


const columns = [
  { name: 'id', header: '№п/п', defaultVisible: true, defaultWidth: 30 },
  { name: 'name', header: 'ФИО', defaultWidth: 250 },
  { name: 'day_1', header: 'day_1', defaultFlex: 1 },
  { name: 'day_2', header: 'day_2', defaultFlex: 1,},
  { name: 'day_3', header: 'day_3', defaultFlex: 1,},
  { name: 'day_4', header: 'day_4', defaultFlex: 1,},
  { name: 'day_5', header: 'day_5', defaultFlex: 1,},
  { name: 'day_6', header: 'day_6', defaultFlex: 1,},
  { name: 'day_7', header: 'day_7', defaultFlex: 1,},
  { name: 'day_8', header: 'day_8', defaultFlex: 1,},
  { name: 'day_9', header: 'day_9', defaultFlex: 1,},
  { name: 'day_10', header: 'day_10', defaultFlex: 1,},
  { name: 'day_11', header: 'day_11', defaultFlex: 1,},
  { name: 'age', header: 'Age', type: 'number', defaultFlex: 1 }
]

const App = () => {
  const [dataSource, setDataSource] = useState(R)
  const [value, setValue] = useState('')

  const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
    const data = [...dataSource];
    data[rowIndex][columnId] = value;

    setValue('')
    setDataSource(data)
  }, [dataSource])

  const onEditValueChange = useCallback(({ value, columnId , rowIndex }) => {
    setValue(value)
  }, [])

  const onEditStart = useCallback(({ value, columnId, rowIndex }) => {
    setValue(value)
    console.log(R);
  }, [])

  return (
    
    <div>
      <EditorFeedback value={value} />
     <div class="header_info"><div class="teacher">ПРЕПОДОВАТЕЛЬ {teacher}</div><div class="month">УЧЕТ ПОСЕЩАЕМОСТИ ЗА {month}</div></div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        onEditStart={onEditStart}
        onEditComplete={onEditComplete}
        onEditValueChange={onEditValueChange}
        editable
        columns={columns}
        dataSource={dataSource}
      />
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of 3e3893d (firstCommit)
    </div>
  );
}

export default App;
