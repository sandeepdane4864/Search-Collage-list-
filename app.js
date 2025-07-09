let url = "http://universities.hipolabs.com/search?country=";

async function getUniversities(url) {
    try {
        let link = await axios.get(url);
        return link.data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    let collage_data = await getUniversities(url+country);
    console.log(collage_data);
    let ul = document.querySelector('ul');
    ul.innerText= '';
    if(collage_data.length === 0) {
        let li = document.createElement('li');
        li.innerText = `No universities found in ${country}`;
        ul.appendChild(li);
    }else{
        collage_data.forEach((collage) => {
        let li = document.createElement('li');
        li.innerText = collage.name;
        ul.appendChild(li);
    });
    }
    document.querySelector('input').value = '';
    document.querySelector('input').placeholder = `Enter another country name`;
  
});
