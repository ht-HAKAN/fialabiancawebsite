document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklendiğinde animasyonları başlat
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Mouse hareketi ile arka plan etkileşimi
    document.addEventListener('mousemove', (e) => {
        const glowEffects = document.querySelectorAll('.glow-effect');
        const shapes = document.querySelectorAll('.floating-shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Parlayan efektlerin mouse hareketine tepkisi
        glowEffects.forEach((glow, index) => {
            const speed = 0.03 + (index * 0.01);
            const moveX = (x - 0.5) * speed * 100;
            const moveY = (y - 0.5) * speed * 100;
            
            glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        // Şekillerin mouse hareketine tepkisi
        shapes.forEach((shape, index) => {
            const speed = 0.02 + (index * 0.005);
            const moveX = (x - 0.5) * speed * 50;
            const moveY = (y - 0.5) * speed * 50;
            
            shape.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${x * 10}deg)`;
        });
    });
    
    // İletişim kutusuna hover efekti
    const contactBoxes = document.querySelectorAll('.contact-box');
    contactBoxes.forEach(contactBox => {
        contactBox.addEventListener('mouseenter', () => {
            contactBox.style.transform = 'translateY(-5px)';
            contactBox.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        contactBox.addEventListener('mouseleave', () => {
            contactBox.style.transform = 'translateY(0)';
            contactBox.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Dil değişimi için değişkenler
    const turkishContent = document.querySelector('.text-content.turkish');
    const englishContent = document.querySelector('.text-content.english');
    const turkishFooter = document.querySelector('.footer-text.turkish');
    const englishFooter = document.querySelector('.footer-text.english');
    
    // 7 saniyede bir dil değişimi
    function toggleLanguage() {
        // Türkçe aktifse İngilizce'ye geç
        if (turkishContent.classList.contains('active')) {
            turkishContent.classList.remove('active');
            turkishFooter.classList.remove('active');
            englishContent.classList.add('active');
            englishFooter.classList.add('active');
        } 
        // İngilizce aktifse Türkçe'ye geç
        else {
            englishContent.classList.remove('active');
            englishFooter.classList.remove('active');
            turkishContent.classList.add('active');
            turkishFooter.classList.add('active');
        }
    }
    
    // 7 saniyede bir dil değişimi için interval
    setInterval(toggleLanguage, 7000);
});
