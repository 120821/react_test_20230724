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
import axios from 'axios';

function Hi() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name') || 'Anonymous';

  // 使用get 获得接口的数据
  let url = "https://xxx.com(你的一个api接口)"
  const response = axios.get(url)
  console.info("== response.data: ", response.data)
  console.info("== response.message: ", response.message)

  return (
    <div>
      <h3>hi, {name}</h3>
    </div>
  );
}

export default Hi;
