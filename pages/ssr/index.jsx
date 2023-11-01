export async function getServerSideProps() {
    try {

      // const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const res = await fetch('https://hellomentor.in/api/v4/get-all-countries');
      const data = await res.json(); 

      return {
        props: {
          todos: data.data, 
        }
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          todos: null, 
        }
      };
    }
  }

  function ServerSideRender({ todos }) {
    if (!todos) {
      return <div>Error fetching data</div>;
    }
  
    if (!Array.isArray(todos)) {
      return <div>Invalid data format</div>;
    }
    console.log(todos,"hellomentor");

    return (
      <div>
        {todos.map((ele) => (
            <>
            <div key={ele.country_id}>
              {ele.country_name}
            </div>
            {/*  <img src={ele.country_flag} alt="img" /> */}
            </>
        ))
    }
      </div>
    );
  }
  
  export default ServerSideRender;
  