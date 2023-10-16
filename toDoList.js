const UL_DOM = document.querySelector('#list');
const BUTTON = document.querySelector('#button');
const INPUT = document.querySelector('#task');
let TODOS = []; 

// Sayfa yüklendiğinde localStorage'dan görevleri al
if (localStorage.getItem('todos')) {
    TODOS = JSON.parse(localStorage.getItem('todos')); // localStorage'dan görevleri al ve JavaScript nesnesine dönüştür
    displayTodos(); // Görevleri ekranda görüntüle
}

BUTTON.addEventListener("click", () => { //butona tiklandiginda
    const task = INPUT.value;  //task'e input degerini al.
    TODOS.push(task); //todos arrayine task'i ekle.
    saveTodosToLocalStorage(); // Yeni görev ekledikten sonra localStorage'a kaydet
    displayTodos(); //taskleri gosteren fonksiyonu cagiriyoruz.
    INPUT.value = ''; // Görev ekledikten sonra input alanını temizle
});

function displayTodos() { //ul'de li olusturup gosterilmesini sağlar.
    UL_DOM.innerHTML = ''; // Listeyi temizle (bunu yazpmazsan liste temizlenmez gorev üstüne gorev ekler. Son gorevi yazdirir.)

    for (let i = 0; i < TODOS.length; i++) { //todos listesini donup gorevleri listeye ekleme.
        const li = document.createElement('li'); // li elementi olusturma.
        li.textContent = TODOS[i]; //li 'yi gorevle doldur.
        UL_DOM.appendChild(li); //li elementini listeye ekle.
    }
}

function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(TODOS)); // Görevleri JSON formatına çevirerek localStorage'a kaydet
}
