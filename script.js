// متغير لتحديد اللغة الحالية (الافتراضي: عربي)
let currentLang = 'ar';

// دالة تبديل اللغة (عربي / إنجليزي)
function toggleLanguage() {
    const htmlRoot = document.documentElement;
    const langBtn = document.getElementById('lang-btn');
    
    if (currentLang === 'ar') {
        currentLang = 'en';
        htmlRoot.setAttribute('dir', 'ltr');
        htmlRoot.setAttribute('lang', 'en');
        if (langBtn) langBtn.innerText = 'العربية';
    } else {
        currentLang = 'ar';
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.setAttribute('lang', 'ar');
        if (langBtn) langBtn.innerText = 'English';
    }

    // تحديث جميع النصوص التي تحتوي على سمات الترجمة
    document.querySelectorAll('[data-ar]').forEach(el => {
        const translatedText = el.getAttribute(currentLang === 'en' ? 'data-en' : 'data-ar');
        if (translatedText) {
            el.innerHTML = translatedText;
        }
    });
}

// دالة التنقل بين التبويبات بسلاسة
function switchTab(tabName, navElement) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const targetTab = document.getElementById('tab-' + tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    if (navElement) {
        navElement.classList.add('active');
    } else {
        const index = tabName === 'home' ? 0 : (tabName === 'digital' ? 1 : 2);
        const navItems = document.querySelectorAll('.nav-item');
        if (navItems[index]) {
            navItems[index].classList.add('active');
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// عرض وإخفاء نافذة دليل الإضافة للشاشة الرئيسية
function showInstallGuide() {
    const modal = document.getElementById('pwa-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeInstallGuide() {
    const modal = document.getElementById('pwa-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// التعامل مع نموذج التواصل (يتوافق مع اللغتين)
function handleContactSubmit(e) {
    e.preventDefault();
    const successMsg = currentLang === 'ar' 
        ? 'تم استلام رسالتك بنجاح! سيتواصل معك فريق شركة أفرودار قريباً.' 
        : 'Your message has been received successfully! Afrodar team will contact you soon.';
    alert(successMsg);
    e.target.reset();
}

// دالة للتحكم بالقوائم المنسدلة (إن وجدت)
function toggleAccordion(header) {
    const body = header.nextElementSibling;
    body.classList.toggle('open');
}
