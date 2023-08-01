const form = document.querySelector('#searchform');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchterm = form.elements.query.value;
    const config = {params:{q: searchterm, isfunny:'meet'}}
const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
makeimages(res.data)
form.elements.query,value;
})
const makeimages = (shows) => {
    for(let result of shows){
        if(result.show.image) {
const img = document.createElement('IMG');
img.src = result.show.image.medium;
document.body.append(img)
        }
    }
}