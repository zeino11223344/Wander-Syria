// 1. رسالة ترحيب عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    alert('مرحبًا بك في دليل السياحة في سوريا!');

    // 2. تغيير لون الخلفية
    function changeBackgroundColor() {
        document.body.style.backgroundColor = 'lightblue';
    }

    const changeColorButton = document.createElement('button');
    changeColorButton.innerText = 'تغيير لون الخلفية';
    changeColorButton.onclick = changeBackgroundColor;
    document.body.appendChild(changeColorButton);

    // 3. تغيير النصوص
    function changeDescription() {
        const descriptions = [
            "وصف جديد للمعلم الأول.",
            "وصف جديد للمعلم الثاني.",
            "وصف جديد للمعلم الثالث."
        ];
        const randomIndex = Math.floor(Math.random() * descriptions.length);
        document.querySelector('p').innerText = descriptions[randomIndex];
    }

    const changeTextButton = document.createElement('button');
    changeTextButton.innerText = 'تغيير الوصف';
    changeTextButton.onclick = changeDescription;
    document.body.appendChild(changeTextButton);

    // 4. عرض الصور بشكل متسلسل
    let currentIndex = 0;
    const images = [
        'images/umayyad-mosque.jpg',
        'images/aleppo-citadel.jpg',
        'images/homs-citadel.jpg'
    ];

    function showNextImage() {
        const imgElement = document.querySelector('img');
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(showNextImage, 3000); // تغيير الصورة كل 3 ثواني

    // 5. إظهار معلومات إضافية عند التمرير
    const infoBox = document.createElement('div');
    infoBox.style.display = 'none';
    infoBox.style.position = 'absolute';
    infoBox.style.backgroundColor = 'white';
    infoBox.style.border = '1px solid #ccc';
    infoBox.style.padding = '10px';

    document.body.appendChild(infoBox);

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseover', function(event) {
            infoBox.innerText = 'معلومات إضافية عن هذا المعلم.';
            infoBox.style.display = 'block';
            infoBox.style.left = event.pageX + 'px';
            infoBox.style.top = event.pageY + 'px';
        });

        img.addEventListener('mouseout', function() {
            infoBox.style.display = 'none';
        });
    });

    // 6. نموذج للتعليقات
    const commentSection = document.createElement('section');
    commentSection.innerHTML = `
        <h2>أضف تعليقك</h2>
        <textarea id="comment" placeholder="اكتب تعليقك هنا..."></textarea>
        <button id="submitComment">إرسال</button>
        <div id="commentsSection"></div>
    `;
    document.body.appendChild(commentSection);

    document.getElementById('submitComment').onclick = function() {
        const comment = document.getElementById('comment').value;
        const commentsSection = document.getElementById('commentsSection');
        const newComment = document.createElement('p');
        newComment.innerText = comment;
        commentsSection.appendChild(newComment);
        document.getElementById('comment').value = ''; // مسح حقل التعليق
    };

    // 7. مؤقت للزيارة
    let timer;
    function startTimer(duration) {
        let timerDisplay = document.createElement('div');
        document.body.appendChild(timerDisplay);
        
        let minutes, seconds;
        timer = setInterval(function () {
            minutes = parseInt(duration / 60, 10);
            seconds = parseInt(duration % 60, 10);
            
            timerDisplay.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

            if (--duration < 0) {
                clearInterval(timer);
                alert("انتهت مدة الزيارة!");
            }
        }, 1000);
    }

    // بدء المؤقت لمدة 5 دقائق
    startTimer(300);
});
