import axios from 'axios'

let server = "http://sss.xxxxxx.com/"; //后端转发服务器地址


let post = async function (url, body={}) {
  try {
    let reqData = {
      method: 'post',
      url: server + url,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      withCredentials :true,
      crossDomain:true,
      timeout:60*1000
    }
    let res = await axios(reqData);
    return res.data;
  } catch (error) {
    if(error.toString().indexOf('timeout')>0){
      return {code: -2, message: '请求超时！'};
    }else{
      return {code: -1, message: '请求出错！'};
    }
  }
}



export default {
  post
};
