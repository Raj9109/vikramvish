const backgroundImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1472214103451-9374a3b58a12',
    'https://images.unsplash.com/photo-1501854140801-50d01698902b'
];

function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const heroSection = document.querySelector('.hero');
    const contentSection = document.querySelector('.content');
    
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
    }
    if (contentSection) {
        contentSection.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
    }
}

window.onload = function() {
    setRandomBackground();
};

function changeLanguage() {
    const lang = document.getElementById('language').value;
    if (lang === 'hi') {
        if (document.querySelector('.main-title')) {
            document.querySelector('.main-title').textContent = 'जलवायु परिवर्तन';
            document.querySelector('.tagline').textContent = 'जलवायु कार्रवाई के लिए एक साथ काम करना';
        }
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'होम';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'कारण';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'प्रभाव';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'समाधान';
        if (document.querySelector('.content h2')) {
            const contentTitle = document.querySelector('.content h2');
            if (contentTitle.textContent.includes('Causes')) {
                contentTitle.textContent = 'जलवायु परिवर्तन के कारण';
            } else if (contentTitle.textContent.includes('Effects')) {
                contentTitle.textContent = 'जलवायु परिवर्तन के प्रभाव';
            } else if (contentTitle.textContent.includes('Solutions')) {
                contentTitle.textContent = 'जलवायु परिवर्तन के समाधान';
            }
        }
    } else {
        if (document.querySelector('.main-title')) {
            document.querySelector('.main-title').textContent = 'Climate Change';
            document.querySelector('.tagline').textContent = 'Working together for climate action';
        }
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'Home';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Causes';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Effects';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Solutions';
        if (document.querySelector('.content h2')) {
            const contentTitle = document.querySelector('.content h2');
            if (contentTitle.textContent.includes('कारण')) {
                contentTitle.textContent = 'Causes of Climate Change';
            } else if (contentTitle.textContent.includes('प्रभाव')) {
                contentTitle.textContent = 'Effects of Climate Change';
            } else if (contentTitle.textContent.includes('समाधान')) {
                contentTitle.textContent = 'Solutions for Climate Change';
            }
        }
    }
    // भाषा बदलने पर बैकग्राउंड इमेज रिफ्रेश करें
    setRandomBackground();
}
