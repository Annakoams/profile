document.addEventListener('DOMContentLoaded', function () {
    // Charger la langue par défaut (par exemple, anglais)
    changeLanguage('fr');

    // Initialiser la position du handle du slider
    const sliderHandle = document.querySelector('.handle');
    sliderHandle.style.marginLeft = '-35px';


    // Attacher l'événement onclick au sélecteur de langue
    document.getElementById('languageSelector').addEventListener('click', function () {
        switchLanguage();
    });
});

function switchLanguage() {
    const languageToggle = document.querySelector('.toggle-container');
    const sliderHandle = document.querySelector('.handle');
    const languages = document.querySelectorAll('.language');

    // Basculer la classe 'active' sur la toggle-container
    languageToggle.classList.toggle('active');

    // Déterminer la langue sélectionnée en fonction de la classe
    const selectedLanguage = languageToggle.classList.contains('active') ? 'en' : 'fr';

    // Mettre à jour la position du handle du slider en fonction de la langue sélectionnée
    if (selectedLanguage === 'en') {
        sliderHandle.style.marginLeft = '-20px'; // Position à gauche
    } else {
        sliderHandle.style.marginLeft = '-35px'; // Position à droite
    }

    changeLanguage(selectedLanguage);

    // Basculer la classe 'language-selected' sur les éléments de langue
    languages.forEach(language => {
        const lang = language.dataset.lang;
        if (lang === selectedLanguage) {
            language.classList.add('language-selected');
        } else {
            language.classList.remove('language-selected');
        }
    });
}

function changeLanguage(selectedLanguage) {
    fetch(`translations/${selectedLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            // Logique pour mettre à jour le contenu de la page avec les traductions du fichier JSON
            const translatableElements = document.querySelectorAll('.translatable');
            translatableElements.forEach(element => {
                const key = element.dataset.translationKey;

                if (key && data[key]) {
                    // Mettre à jour le texte de l'élément
                    element.innerHTML = data[key]; // Utilise innerHTML pour interpréter les balises HTML
                }
            });

            // Mettre à jour le titre de la page
            // document.title = data['title'];
        })
        .catch(error => {
            console.error('Erreur de chargement du fichier JSON :', error);
            // Affichez un message d'erreur à l'utilisateur ou chargez une langue par défaut
        });
    console.log('h3')
}


