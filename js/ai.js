const loadCard = async(seeMore) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json()
    const allData = data.data.tools;
    // console.log(allData);
    displayCard(allData, seeMore);
}

const displayCard = (items, seeMore) => {
    const cardContainer = document.getElementById('card-container');

    // items = items.slice(0,7);

    // get show all container 
    const showAllContainer = document.getElementById('see-more-container');
    if(items.length > 6 && !seeMore){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    // See more
    if(!seeMore){
        items = items.slice(0,6);
    }
    items.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        div.classList = `card card-compact bg-base-100 shadow-xl p-6`;
        div.innerHTML = `
        <figure><img src="${item?.image}" alt="Not found" /></figure>
                    <div class="card-body">
                      <h2 class="text-2xl font-semibold">Features</h2>
                      <ol class="text-[#585858]">
                        <li>1. ${item.features[0]}</li>
                        <li>2. ${item.features[1]}</li>
                        <li>3. ${item.features[2]}</li>
                      </ol>
                      <hr>
                      <h2 class="text-2xl font-semibold">${item.name}</h2>
                      <p class="text-[#585858]">${item.published_in}</p>
                    </div>
        `;
        cardContainer.appendChild(div);
    })

}


// get show all button 
const showAll = () => {
    
    loadCard(true);
}



loadCard();