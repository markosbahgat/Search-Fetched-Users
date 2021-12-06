import React from "react";
import './App.css';
import './index.css';

class App extends React.Component {
    state = {
        AllUsers:[],
        SearchedUsers:[],
        searchquery:""
    };
    
    async componentDidMount() {
      await fetch("https://randomuser.me/api/?seed=dexi-interview?page=1&results=150")
      .then(Response => Response.json())
      .then(data => this.setState({AllUsers : data.results}))
        
    }

    
    handlechange = (event) =>{
      if(event.target.value === ""){
        this.componentDidMount(); 
      }else{
        const SearchedUsers = this.state.AllUsers.filter((user) => {
          return user.name.first.includes(event.target.value);
        });
        this.setState({AllUsers : SearchedUsers});
      }
    }
    
    render() {
        return (
        <div>
                    <h1 className="col-5" style={{marginLeft:"40%"}}>Search In Fetched Users</h1>
                    <div className="col-6 m-auto mt-5">
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search By Name ...." aria-label="Search" aria-describedby="search-addon" onChange={(event) => this.handlechange(event)}/>
                            <span className="input-group-text border-0" id="search-addon">
                              <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                    <div className="bdr col-10">
                          <table className="table col-11">
                              <thead className="thead-dark bg-dark m-auto ">
                                <tr>
                                  <th scope="col">Profile Photo</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">UserName</th>
                                  <th scope="col">Password</th>
                                  <th scope="col">Location</th>
                                  <th scope="col">Phone</th>
                                </tr>
                              </thead>
                              <tbody>
                              {
                                
                              this.state.AllUsers.map(user => {
                                    return <tr key={user.cell} className="m-auto border  border-1 border-secondary shadow">
                                    <th scope="row"><img src={user.picture.thumbnail} alt="#" className="ms-2 rounded-circle"/></th>
                                    <td className="m-auto ">{user.name.title.slice(0,2)}: {user.name.first} {user.name.last}</td>
                                    <td className="m-auto">{user.gender}</td>
                                    <td className="m-auto">@{user.login.username}</td>
                                    <td className="m-auto">{user.login.password}</td>
                                    <td className="m-auto">{user.location.city}, {user.location.country} </td>
                                    <td className="m-auto">{user.phone}</td>
                                  </tr>
                                  })
                              }
                              </tbody>
                        </table>
                </div>
</div>  
);
    }
}

export default App;



