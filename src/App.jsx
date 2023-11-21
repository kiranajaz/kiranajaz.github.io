import React from 'react';
import style from './style.css';
import Navbar from './components/Navbar';
import footer from './components/footer';

function App(){
return( 
<div> 
  <Navbar />
 

     <table>
        <tr><th>Month</th><th>Date</th><th>Name</th><th>DMV Staff</th></tr>
        <tr><td>Nov</td><td>17</td><td>John</td><td>Peter Paker</td></tr>
        <tr><td>Nov</td><td>20</td><td>Lucas</td><td>Sam Tylor</td></tr>
        <tr><td>Nov</td><td>23</td><td>Jack</td><td>Mark Smith</td></tr>
     </table>
     <footer>
        <p> &copy; Made by Kiran Ajaz</p>
    </footer>
</div>
  )
}



export default App;