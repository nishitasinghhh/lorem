// lorem text
const text = [
    `Sunset's Embrace: As the sun dipped below the horizon, the sky transformed into a canvas of warm hues. Shades of gold and crimson danced together, painting a masterpiece that melted the day's worries away. The gentle embrace of twilight whispered promises of serenity and new beginnings.`,
    `Majestic Mountains: Towering peaks kissed the heavens, their rugged silhouettes etched against the backdrop of an endless azure sky. Veils of mist clung to the valleys below, like secrets waiting to be unveiled. Amidst the grandeur, nature's artistry humbled even the boldest hearts.`,
    `Ocean Serenade: Waves danced in harmony, their rhythmic melody soothing the soul. As the sea met the shore in an eternal embrace, seagulls painted the air with their carefree calls. With each tide's embrace, the ocean whispered stories of ancient voyages and timeless mysteries.`,
    `Whispers of Autumn: The air turned crisp and fragrant, adorned with the essence of fallen leaves. Trees dressed in vibrant hues of amber and scarlet painted the landscape with their tales of change. In the midst of nature's transformation, the world embraced the artistry of letting go.`,
    `Starry Reverie: Under the canopy of a moonlit night, stars shimmered like diamonds scattered across an obsidian tapestry. Each celestial light told stories of distant realms and cosmic dreams, igniting the imagination and reminding us of our place in the universe.`,
    `Enchanted Forest: Sunlight filtered through the canopy, casting dappled patterns on the forest floor. Moss-covered stones whispered ancient secrets, and the gentle rustle of leaves created a symphony of tranquility. In this hidden realm, time seemed to stand still, inviting wanderers to lose themselves in its magic.`,
    `Cityscape Symphony: Urban lights illuminated the night sky, a symphony of colors and reflections in a modern orchestra. Skyscrapers reached for the stars, their architecture a testament to human ingenuity. Amid the bustling streets, dreams took flight against a backdrop of urban energy.`,
    `Morning Dew: The first light of dawn kissed the world awake, and dewdrops adorned petals like glistening jewels. Each droplet held a universe within, reflecting the beauty of a new day and the promise of fresh beginnings.`,
    `Eternal Canyon: Time carved intricate patterns into the heart of the canyon, revealing layers of history etched in stone. The sun's embrace painted the walls with a shifting palette, turning the canyon's tale into a mesmerizing work of natural art.`,
    `Lighthouse Sentinels: Amid crashing waves and tempestuous winds, lighthouses stood as steadfast sentinels of the coast. Their beacons cut through the darkness, offering guidance and hope to weary sailors. In their resolute strength, they symbolized the human spirit's ability to shine even in the stormiest of times.`
  ];
  const form =document.querySelector(".lorem-form");
  const amount=document.getElementById("amount");
  const result=document.querySelector(".lorem-text");
  form.addEventListener("submit",function(e){
   e.preventDefault();
   const value= parseInt(amount.value);
   const random=Math.floor(Math.random()*text.length);
   if(isNaN(value)|| value<=0|| value>9)
   {
    result.innerHTML=`<p class="result">${text[random]}</p>`
   }
   else{
    let tempText=text.slice(0,value);
    tempText=tempText.map(function(item){
      return `<p class="result">${item}</p>`
    }).join("")
    result.innerHTML=tempText;
   }
  })