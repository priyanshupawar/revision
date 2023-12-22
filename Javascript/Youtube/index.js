// const Api_Key = `AIzaSyAO9S97kRNKMrSyh4r9hfSYRe-3YGcI2V0`;
const Api_Key = "AIzaSyAJKfjVRli1M0BKvp5sqkmfn0x8vwL7w7gr";

const HomeData = async () => {
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=javascriptQuestions&key=${Api_Key}`
    );
    let data = await res.json();
    const actualData = data.items;
    const ContainerDiv = document.getElementById("ParentContainer");
    ContainerDiv.innerHTML = null;
    appendVideos(actualData);
  } catch (err) {
    console.log("error", err);
  }
};

HomeData();
const trendingData = async () => {
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=trending&key=${Api_Key}`
    );
    let data = await res.json();
    const actualData = data.items;
    const ContainerDiv = document.getElementById("ParentContainer");
    ContainerDiv.innerHTML = null;
    appendVideos(actualData);
  } catch (err) {
    console.log("error", err);
  }
};

//search function for navbar

const searchVideos = async (e) => {
  e.preventDefault();
  try {
    const query = document.getElementById("query").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${Api_Key}`
    );
    let data = await res.json();
    const actualData = data.items;
    const ContainerDiv = document.getElementById("ParentContainer");
    ContainerDiv.innerHTML = null;
    appendVideos(actualData);
  } catch (err) {
    console.log("error", err);
  }
};

//Append the search thing on page

const ContainerDiv = document.getElementById("ParentContainer");

const appendVideos = (data) => {
  data.forEach(({ snippet, id: { videoId } }) => {
    // console.log(videoId);
    const title = snippet.title;
    // const videoId = snippet.videoId;
    const thumbnail = snippet.thumbnails.high.url;
    const image = snippet.thumbnails.default.url;
    const ChannelName = snippet.channelTitle;
    // creation

    let data = {
      videoId,
      snippet,
    };
    let container = document.createElement("div");
    container.style.cursor = "pointer";
    container.addEventListener("click", () => {
      storeClickedVideo(data);
      console.log(title);
      window.location.href = "/video.html";
    });

    function storeClickedVideo(data) {
      // console.log("data :", data);
      localStorage.setItem("clicked_items", JSON.stringify(data));
    }
    let videoThumb = document.createElement("img");
    videoThumb.src = thumbnail;

    let img = document.createElement("img");
    img.src = image;
    let heading = document.createElement("h6");
    heading.innerText = title;
    let Cname = document.createElement("p");
    Cname.innerText = ChannelName;

    container.append(videoThumb, heading, Cname);
    ContainerDiv.append(container);
  });
};
