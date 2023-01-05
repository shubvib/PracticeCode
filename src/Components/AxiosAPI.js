import axios from "axios"

// --------------- Fetching data using axios function--------------------
//------------------- Axios does not required data to be converted into json ---------------

function AxiosAPI() {
    const getData = async () =>{
      const data = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
      return data
    }
    getData().then((response)=>{
      console.log("AxiosAPI result-------------------")
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
    getData()
  }
  export default (AxiosAPI)