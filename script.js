 // دالة لتبديل ظهور القائمة
 function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

  // وظيفة لإظهار/إخفاء الخيارات
  function togglePackage(package) {
    // إغلاق جميع الحزم الأخرى
    document.querySelectorAll('.package').forEach(p => {
        if (p !== package) {
            p.classList.remove('active');
        }
    });

    // تبديل الحزمة المحددة
    package.classList.toggle('active');
}

// تفاعلية زر الحجز
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // منع تنفيذ النقر على الحزمة
        alert('شكرًا لاختيارك إحدى حزمنا! سيتم تحويلك إلى صفحة الحجز.');
        window.location.href = 'احجز الان .html'; // الانتقال إلى صفحة الحجز
    });
});


function readAltText(imgid) {
    var img = document.getElementById(imgid);
    var altText = img.alt;
    var utterance = new SpeechSynthesisUtterance(altText);
    utterance.lang = 'ar';
    window.speechSynthesis.speak(utterance);
 }


function updateDateTime() {
    document.getElementById("dateTime").innerText = new Date().toLocaleString("ar-EG");
}
setInterval(updateDateTime, 1000);
updateDateTime();

if (localStorage.getItem("visitCount")) {
    let count = parseInt(localStorage.getItem("visitCount")) + 1;
    localStorage.setItem("visitCount", count);
    document.getElementById("visitCount").innerText = count;
} else {
    localStorage.setItem("visitCount", 1);
    document.getElementById("visitCount").innerText = 1;
}

let speechSynthesisUtterance;
function speak() {
    let text = document.getElementById("Firsttext").textContent;
    speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
    speechSynthesisUtterance.lang = 'ar-EG';
    window.speechSynthesis.speak(speechSynthesisUtterance);
}

function stopSpeech() {
    window.speechSynthesis.cancel();
}

document.getElementById("currentYear").innerText = new Date().getFullYear();