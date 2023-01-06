// --------------- Fetching data using fetch function--------------------
//------------------- Fetch required data to be converted into json ---------------

function FetchAPI() {
  const getData = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    return data;
  };
  getData()
    .then(async (response) => {
      if(response.ok){
        const jsonData = await response.json();
        return jsonData;
      }else{
        throw new Error("Unable to fetch Data using Fetch")
      }
    })
    .then((result) => {
      console.log("FetchAPI result-------------------");
      // result.map(value =>{
      //   console.log(value);
      // })
      console.log(result)
    })
    .catch((err) => {
      console.log(err);
    });
  getData();

  return(
    <>
    <h3>${}</h3>
    
    
    
    </>
  )
}
export default FetchAPI;
