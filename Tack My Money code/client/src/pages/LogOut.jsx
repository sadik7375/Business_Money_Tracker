import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate=useNavigate();
    return (
        <div>
            
            const handleLogout = () => {
  
  localStorage.removeItem('jwtToken');
  
  navigate('/login');
};


          
  <button onSubmit={handleLogout}>Logout</button>

    


        </div>
    );
};

export default LogOut;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProtectedResource = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Make an authenticated GET request to the protected resource
//     axios.get("/protected-resource", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
//       },
//     })
//     .then((response) => {
//       // Handle the successful response from the protected resource
//       setData(response.data);
//     })
//     .catch((error) => {
//       // Handle errors, such as unauthorized access
//       setError(error.response.data);
//     });
//   }, []);

//   return (
//     <div>
//       {data ? (
//         // Display data from the protected resource
//         <div>{JSON.stringify(data)}</div>
//       ) : error ? (
//         // Display an error message
//         <div>Error: {error.message}</div>
//       ) : (
//         // Display a loading indicator or other content while waiting for the response
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default ProtectedResource;
