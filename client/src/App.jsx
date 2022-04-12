import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<GetDataTodos />}/>

                {/* ---------- ROUTE ERROR 404 ---------- */}
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

function Error404() {
    return (
      <>
          <h1>Page 404</h1>
      </>
    )
  }

function GetDataTodos() {
    const [ dataUsers, setDataUsers] = React.useState([])
  
    useEffect(() => {
        getDataUsers();
    }, []);
  
    const getDataUsers = async () => {
        try {
            const res = await axios.get('/asd');
            setDataUsers(res.data);
            console.log(res.data, " asdsadad")
        } catch (error) {
            console.log(error);
        }
    }
  
    return (
      <>
        <h1>Hello wordl</h1>
        
        {dataUsers.map((item) => {
          return(
              <h4>{ item.title }</h4>
          )
          
          })}
      </>
    )
}




// class App extends Component {
// state = {
//     data: null
//   };

//   componentDidMount() {
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     return body;
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Client</h1>
//         <p className="App-intro">{this.state.data}</p>
//       </div>
//     );
//   }
// }

export default App;
