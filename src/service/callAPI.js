class callAPI {
  static async login(email, password) {
    const rawResponse = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: `${email}`, password: `${password}` }),
    });
    const content = await rawResponse.json();

    let resStatus = content.status;
    if (resStatus === 200) {
      localStorage.setItem('token', content.body.token);
      return true;
    }

    if(resStatus === 400){
      return false;
    }
  }

  static async getUserProfile(token) {
    const rawResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      }
    });
    const content = await rawResponse.json();
    
    return content;
  }

  static async updateUserName(firstName, lastName, token) {
    const rawResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName: `${firstName}`, lastName: `${lastName}` }),
    });
    const content = await rawResponse.json();

    return content.body;
  }
}

export default callAPI;
