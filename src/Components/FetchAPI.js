

// --------------- Fetching data using fetch function--------------------
//------------------- Fetch required data to be converted into json ---------------

function FetchAPI() {
  const getData = async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    return data
  }
  getData().then(async (response)=>{
    const jsonData = await response.json();  {/* converting data into json format */}
    return jsonData
  }).then((result)=>{
    console.log("FetchAPI result-------------------")
    console.log(result)
  }).catch((err)=>{
    console.log(err)
  })
  getData()
}
export default (FetchAPI)
