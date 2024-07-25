import React, { useState } from 'react'

function Hooks() {

    const [restaurants, setRestaurants] = useState([{
        name:"Divya",
        age:21
    },{
        name:"Priya",
        age:21
    },{
        name:"Honey",
        age:21
    }]);

    const handleUpdate = (age, name) =>{
        console.log("updated", age, name);
    }

  return (
    <div>
        <button onClick={() => handleUpdate(21, "name")}>Update</button>
        {/* if we use onclick={handleUpdate} - it works fine without params which needs to pass from here
        but if we use like this onClick={handleUpdate(21, "name")} : then it runs only 1 time when page loads, doesn't work on clicks
        but if we use like this for params onClick={() => handleUpdate(21, "name")}: then it works fine and pass the requested params
        because it will make sure it runs only when it is clicked
        reason ??? 
        may be: a direct func in event handler calls immediately when we add () after func name., but if we write the same format with ()
        with extra func, it stop running immediately.
         */}
        {restaurants.map((item, index) => {
            return (
            <div key={index}>
                <h1>{item.name}</h1>
                <h1>{item.age}</h1>
            </div>
        )})}

    </div>
  )
}

export default Hooks
