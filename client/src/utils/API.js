import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id --- read
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    console.log(`delete data ... ${JSON.stringify(id)}`);
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(postData) {
    console.log(`post data... ${JSON.stringify(postData)}`);
    console.log("saveUser",postData);
    return axios.post("/api/user", postData);
  },
  getUserByLogin(formData){
    console.log(`getUserByLogin... formData ${JSON.stringify(formData)}`);

    // return new Promise((resolve) => { 
    //   setTimeout(() => { 
    //     resolve({id: 2}); 
    //     }, 1000); 
      // }); 
    return axios({
      method: 'post',
      url: '/api/login',
      data: {
        email: formData.email,
        passwd: formData.password
      }
    });
  }

};
