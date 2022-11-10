import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
          Hey Raj, this is your first react application
        </a>
      </header>
      <body>
        <h1 align = 'center'>Welcome to Movie Zone <sub>Movie Search Platform</sub></h1>
        <table align = 'center'>
          <tr>
            <td></td> <td></td><td></td><td></td><td></td>
            <td>
              <form name="searchfield" action="javascript:searchText(search.value)">
                <input type="text" name="search" id="search" placeholder="enter keyword here"/> 
                <input type="Submit" name="submit" value="Search"/>
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Action.jpeg" alt="Action" width= "200" height= "200" onClick="testgetdata('Action')"/> 
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Animation.jpeg" alt="Animation" width= "200" height= "200" onClick="testgetdata('Animation')"/> 
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Childrens.jpeg" alt="Children" width= "200" height= "190" onClick="testgetdata('Children')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Classics.jpeg" alt="Classics" width= "200" height= "170"  onClick="testgetdata('Classics')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Comedy.jpeg" alt="Comedy" width= "200" height= "200" onClick="testgetdata('Comedy')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Documentary.jpeg" alt="Documentary" width= "200" height= "200" onClick="testgetdata('Documentary')"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Drama.jpeg" alt="Drama" width= "200" height= "200"  onClick="testgetdata('Drama')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Family.jpeg" alt="Family" width= "200" height= "200" onClick="testgetdata('Family')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Foreign.jpeg" alt="Foreign" width= "200" height= "200" onClick="testgetdata('Foreign')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Horror.jpeg" alt="Horror" width= "200" height= "200" onClick="testgetdata('Horror')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Music.jpeg" alt="Music" width= "200" height= "200" onClick="testgetdata('Music')"/>
            </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Sci-fi.jpeg" alt="Sci-fi" width= "200" height= "200" onClick="testgetdata('Sci-Fi')"/>
            </td>
          </tr>
          <tr>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Sports.jpeg" alt="Sports" width= "200" height= "200" onClick="testgetdata('Sports')"/>
          </td>
            <td>
              <input type="image" src="${pageContext.request.contextPath}/images/Others.jpeg" alt="Others" width= "200" height= "200" onClick="testgetdata('Travel')"/>
          </td>
          </tr>
          
        </table>
      </body>
    </div>
  );
}

export default App;
