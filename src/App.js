import React, { useState, useCallback } from 'react'
<<<<<<< HEAD
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'


// var requestURL = '';//твой URL


// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   var superHeroes = request.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// }



const data = [
=======

import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-enterprise/index.css'

const R = [
>>>>>>> 243379083ce90bb6125d8dfbdcd5df5b485e3362
  { id: 1, name: 'Абкаров Муслим', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 2, name: 'Бачаев Абдул-Рахман', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 3, name: 'Табалаев Муслим', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 4, name: 'Узиев Имран GURU PYTHON DEVELOPER', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 5, name: 'Магомадов Джабраил', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 6, name: 'Аьнди', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 7, name: 'Турпал', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 8, name: 'Муслим', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 9, name: 'Аюб', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 10, name: 'Юсуп', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 11, name: 'Ибрагимов Юсуп', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 12, name: 'Шамиль', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 13, name: 'Милана', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 14, name: 'Фатима', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 15, name: 'Иса', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 16, name: 'Сурхо', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  { id: 17, name: 'Марха', day_1: 35, day_2: 45, day_3: 35, day_4: 45, day_5: 65, day_6: 45, day_7: 15, day_8: 4, day_9: 35, day_10: 45, day_11: 35,  },
  
]

<<<<<<< HEAD
function postJson(data,url)//типа метод для отправки json
{
  let http = new XMLHttpRequest();
    http.open('POST',url);
    http.onload = ()=>{
        if (http.status >=200 && http.status <300){
            console.log(http.responseText);
        }
    };
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data); // send state as payload
}


=======
>>>>>>> 243379083ce90bb6125d8dfbdcd5df5b485e3362
 var month="МАРТ";
 var teacher='ИБРАГИМОВ ЮСУП МИНКАИЛОВИЧ "МОБИЛЬНАЯ РАЗРАБОТКА" ГРУППА N1'
 
  

<<<<<<< HEAD
const gridStyle = { minHeight:700}//размер таблицы
=======
const gridStyle = { minHeight:window.screen.height}
>>>>>>> 243379083ce90bb6125d8dfbdcd5df5b485e3362

const EditorFeedback = (props) => {
  return (
    <div style={{ margin: '10px 0px'}}>
      Current value: {props.value}.
    </div>
  )
}
<<<<<<< HEAD
 //сами столбцы
=======

>>>>>>> 243379083ce90bb6125d8dfbdcd5df5b485e3362
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

  const [dataSource, setDataSource] = useState(data)
  const [value, setValue] = useState('')
  const [activeCell, setActiveCell] = useState([])
  const [enableKeyboardNavigation, setEnableKeyboardNavigation] = useState(true)
  const [cellSelection, setCellSelection] = useState({})

  const onEditComplete = useCallback(({ value, columnId, rowIndex }) => {
    const data = [...dataSource];
    data[rowIndex][columnId] = value;

    let x=
    {
      day:columnId,id:data[parseInt(rowIndex)].id,valueS:value //записываю в объект номер дня id и значение
    }
     console.log(x);//типа проверка

     postJson(x,"URL") //вызов метода для отправки на сервер

    setValue('');
    setDataSource(data);
    
  }, [dataSource])


  const onEditValueChange = useCallback(({ value, columnId , rowIndex }) => {
    setValue(value)
  }, [])


  const onEditStart = useCallback(({ value, columnId, rowIndex }) => {
    setValue(value)
  }, [])

  return (
    
    <div>
       
     {/* <div className="header_info"><div class="teacher">ПРЕПОДОВАТЕЛЬ {teacher}</div><div className="month">УЧЕТ ПОСЕЩАЕМОСТИ ЗА {month}</div></div> */}
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        onEditStart={onEditStart}
        onEditComplete={onEditComplete}
        onEditValueChange={onEditValueChange} 
        editable
        onCellSelectionChange={setCellSelection}
        activeCell={activeCell}
        onActiveCellChange={setActiveCell}
        enableKeyboardNavigation={enableKeyboardNavigation}
        columns={columns}
        dataSource={dataSource}

        
      />
<<<<<<< HEAD
      <p>Currently active cell: {(JSON.stringify(activeCell))}.</p>
=======
>>>>>>> 243379083ce90bb6125d8dfbdcd5df5b485e3362
    </div>
  );

}

export default () => <App />
// export default App;
