import axios from 'axios';

// GET request
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});


// 유튜브 api로 검색해서 영상불러오기
// const loadYoutubeAPI = () => {
//     const request = require('request');
//     const optionParams = {
//         q: "검색어",
//         part: "snippet",
//         key: "AIzaSyDJHz3_fnLnAOzSOgbtFeIPg0u-jN4E0sI",
//         type: "video",
//         maxResults: 10,
//         regionCode: "KR",
//         videoDuration: "short"
//     };

//     // 한글로 검색하기 위해 url encoding
//     optionParams.q = encodeURI(optionParams.q);

//     let url="https://www.googleapis.com/youtube/v3/search?";
//     for(const option in optionParams){
//         url += option+"="+optionParams[option]+"&";
//     }
    
//     // url 마지막에 붙은 & 제거
//     url=url.substr(0,url.length-1);

//     request(url, (err, res, body)=> {
//         console.log("body: "+ body);

//         // JSON형식을 서버에서 받음
//         const data=JSON.parse(body).items;
//         for(const content in data) {
//             console.log(data[content].snippet.title+" : "+data[content].id.videoID);
//         }
//     });
// };

