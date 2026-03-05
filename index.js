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


