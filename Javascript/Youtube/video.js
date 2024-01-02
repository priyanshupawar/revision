//search function for navbar
const Api_Key = `AIzaSyAJKf97kRNKMrSyh4r9hfSYRe-3YGcI2V0`;
// const Api_Key = "AIzaSyAJKfjVRli1M0BKvp5sqkmfn0x8vwL7w7g";
const searchVideos = async (e) => {
  e.preventDefault();
  try {
    let query = document.getElementById("query").value;

    // console.log(query);
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${Api_Key}`
    );
    query = "";
    let data = await res.json();
    const actualData = data.items;
    console.log("data", actualData);
    appendVideos(actualData);
  } catch (err) {
    console.log("error", err);
  }
};

//Append the search thing on page

// const ContainerDiv = document.getElementById("ParentContainer");
const ContainerDiv = document.getElementById("recommendedVideos");
const appendVideos = (data) => {
  if (data.length === 0) {
    let heading = document.createElement("h1");
    heading.innerText = "404 error try again......";
  } else {
    data.forEach(({ snippet, id }) => {
      const title = snippet.title;
      const videoId = snippet.videoId;
      const thumbnail = snippet.thumbnails.high.url;
      const image = snippet.thumbnails.default.url;
      const ChannelName = snippet.channelTitle;
      // creation
      let container = document.createElement("div");
      container.style.cursor = "pointer";
      container.addEventListener("click", (id) => {
        console.log(title);
        window.location.href = "/video.html";
      });
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
  }
};

async function recommendedVideo() {
  const Api_Key = "AIzaSyAJKfjVRli1M0BKvp5sqkmfn0x8vwL7w7g";
  // e.preventDefault();
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=trending&key=${Api_Key}`
    );
    query = "";
    let data = await res.json();
    const actualData = data.items;
    // console.log("data", actualData);
    appendVideos(actualData);
  } catch (err) {
    console.log("error", err);
  }
}

function playVideo() {
  // e.preventDefault();
  let data = JSON.parse(localStorage.getItem("clicked_items"));
  console.log(data);
  let id = data.videoId;
  let container = document.getElementById("videoDetails");
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  iframe.width = "960";
  iframe.height = "555";
  iframe.setAttribute("allowfullscreen", true);
  // title = document.createElement("h3");
  // title.innerText = data.snippet.description;
  container.append(iframe);

  recommendedVideo();
}

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
