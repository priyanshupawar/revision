//search function for navbar
const Api_Key = `AIzaSyAO9S97kRNKMrSyh4r9hfSYRe-3YGcI2V0`;
const searchVideos = async (e) => {
  e.preventDefault();
  try {
    const query = document.getElementById("query").value;
    // console.log(query);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${Api_Key}`
    );
    let data = await res.json();
    const actualData = data.items;
    console.log("data", actualData);
    appendVideos(actualData);
  } catch (err) {
    console.log("error", err);
  }
};

const ContainerDiv = document.getElementById("ParentContainer");
const appendVideos = (data) => {
  data.forEach(({ snippet, id }) => {
    const title = snippet.title;
    const videoId = snippet.videoId;
    const thumbnail = snippet.thumbnails.high.url;
    const image = snippet.thumbnails.default.url;
    const ChannelName = snippet.channelTitle;
    // creation
    let container = document.createElement("div");
    let videoThumb = document.createElement("img");
    videoThumb.src = thumbnail;

    let img = document.createElement("img");
    img.src = image;
    let heading = document.createElement("h5");
    heading.innerText = title;
    let Cname = document.createElement("h6");
    Cname.innerText = ChannelName;

    container.append(videoThumb, heading, Cname);
    ContainerDiv.append(container);
  });
};
