const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};

const loadLevelWord = (id)  => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWords(data.data))
} 

const displayLevelWords = (words) => {
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = "";

    words.forEach((word) => {
        console.log(word)
        const card = document.createElement('div')
        card.innerHTML = `
         <div class="bg-white rounder-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">${word.meaning}</p>
            <div class="text-2xl font-medium font-bangla">${word.pronunciation}</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-gray-300"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-gray-300"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.append(card)
    })
}

const displayLessons = (lessons) => {
    // 1.get the container empty 
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";
    // 2. get into every lessons 
    for(const lesson of lessons){
        // 3.create element
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML =`
          <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
          Lesson - ${lesson.level_no}
          </button>
        `
        //4. append child into the container
        levelContainer.append(btnDiv)
    }
}
loadLessons();


