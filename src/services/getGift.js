

export default async function getGift({ keyword } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  const res = await fetch(apiURL);
  const response = await res.json();
  const { data } = response;
  const giftMap = data.map((image) => {
    const { title, images, id } = image;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });
  return giftMap;
}
