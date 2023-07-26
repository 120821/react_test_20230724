//import React from 'react';

//function Hi() {
//  const location = useLocation();
//  const params = new URLSearchParams(location.search);
//  const name = params.get('name') || 'Anonymous';

//  return (
//    <div>
//    <h3>hi, {name}</h3>
//    </div>
//  );
//}
//export default Hi;
import React from 'react';
import { useLocation } from 'react-router-dom';

function Hi() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name') || 'Anonymous';

  return (
    <div>
      <h3>hi, {name}</h3>
    </div>
  );
}

export default Hi;
