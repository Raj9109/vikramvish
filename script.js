// site-title के लिए 7 रंग
const colors = [
    'linear-gradient(45deg, #ff6f61, #ffcc5c)', // नारंगी से पीला
    'linear-gradient(45deg, #00c4ff, #00ff88)', // नीला से हरा
    'linear-gradient(45deg, #ff00cc, #3333ff)', // पिंक से नीला
    'linear-gradient(45deg, #ffeb3b, #f44336)', // पीला से लाल
    'linear-gradient(45deg, #4caf50, #8bc34a)', // हरा से हल्का हरा
    'linear-gradient(45deg, #9c27b0, #e91e63)', // बैंगनी से पिंक
    'linear-gradient(45deg, #ff9800, #ff5722)'  // नारंगी से गहरा नारंगी
];

function setRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.style.background = colors[randomIndex];
        siteTitle.style.webkitBackgroundClip = 'text';
        siteTitle.style.webkitTextFillColor = 'transparent';
    }
}

// पेज लोड होने पर पहली बार रंग सेट करें और हर 8 सेकंड में बदलें
window.onload = function() {
    setRandomColor();
    setInterval(setRandomColor, 8000);

    // लाइट/डार्क मोड की प्रारंभिक स्थिति सेट करें
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
    const themeBtn = document.getElementById('theme-btn');
    if (savedTheme === 'dark') {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }

    // भाषा की प्रारंभिक स्थिति सेट करें
    const savedLang = localStorage.getItem('language') || 'en';
    document.getElementById('language').value = savedLang;
    changeLanguage();
};

function changeLanguage() {
    const lang = document.getElementById('language').value;
    localStorage.setItem('language', lang); // भाषा को स्थानीय स्टोरेज में सेव करें

    if (lang === 'hi') {
        if (document.querySelector('.main-title')) {
            document.querySelector('.main-title').textContent = 'जलवायु परिवर्तन';
            document.querySelector('.tagline').textContent = 'जलवायु कार्रवाई के लिए एक साथ काम करना';
        }
        if (document.querySelector('.main-heading')) {
            document.querySelector('.main-heading').textContent = 'जलवायु परिवर्तन';
        }
        if (document.querySelector('.activist-title')) {
            document.querySelector('.activist-title').textContent = 'जलवायु परिवर्तन कार्यकर्ता';
        }
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'होम';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'कारण';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'प्रभाव';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'समाधान';
        if (document.querySelector('.content-title')) {
            const contentTitle = document.querySelector('.content-title');
            if (contentTitle.textContent.includes('Causes')) {
                contentTitle.textContent = 'जलवायु परिवर्तन के कारण';
            } else if (contentTitle.textContent.includes('Effects')) {
                contentTitle.textContent = 'जलवायु परिवर्तन के प्रभाव';
            } else if (contentTitle.textContent.includes('Solutions')) {
                contentTitle.textContent = 'जलवायु परिवर्तन के समाधान';
            }
        }
        // सब-नेविगेशन की भाषा बदलें
        if (document.querySelector('.sub-nav')) {
            document.querySelector('.sub-nav ul li:nth-child(5) a').textContent = 'जल वाष्प';
        }
    } else {
        if (document.querySelector('.main-title')) {
            document.querySelector('.main-title').textContent = 'Climate Change';
            document.querySelector('.tagline').textContent = 'Working together for climate action';
        }
        if (document.querySelector('.main-heading')) {
            document.querySelector('.main-heading').textContent = 'Climate Change';
        }
        if (document.querySelector('.activist-title')) {
            document.querySelector('.activist-title').textContent = 'CLIMATE CHANGE ACTIVIST';
        }
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'Home';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Causes';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Effects';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Solutions';
        if (document.querySelector('.content-title')) {
            const contentTitle = document.querySelector('.content-title');
            if (contentTitle.textContent.includes('कारण')) {
                contentTitle.textContent = 'Causes of Climate Change';
            } else if (contentTitle.textContent.includes('प्रभाव')) {
                contentTitle.textContent = 'Effects of Climate Change';
            } else if (contentTitle.textContent.includes('समाधान')) {
                contentTitle.textContent = 'Solutions for Climate Change';
            }
        }
        // सब-नेविगेशन की भाषा बदलें
        if (document.querySelector('.sub-nav')) {
            document.querySelector('.sub-nav ul li:nth-child(5) a').textContent = 'Water Vapor';
        }
    }
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}
