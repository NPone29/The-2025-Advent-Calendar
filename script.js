//Function: Create an advent calendar with surprises for each day in December leading up to Christmas.
//Author: NPone29
//Date: 29/11/2025
//Version: 1.1.4



// Array of surprises for each day
const surprises = [
            "☕ A hot chocolate awaits you!",
            "🎵 IT'S TIME!",
            "📖 Let's read a good Christmas story.",
            "🍪 It's cookie time!",
            "⭐ Make your Chistmas wish list!",
            "🎨 Draw something beautiful",
            "🎬 Watch a Christmas movie",
            "💌 Send a message to a friend",
            "🕯️ Light a scented candle",
            "🎁 Wrap a gift for someone",
            "❄️ Enjoy the magic of winter",
            "🎄 Decorate your tree a bit more",
            "🌟 Stargaze tonight",
            "🎶 Sing a Christmas carol",
            "📷 Take a beautiful photo",
            "🧣 Go for a walk outside",
            "☃️ Build a snowman",
            "🎪 Do something fun",
            "💝 Give a sincere compliment",
            "🎲 Play a board game",
            "🍰 Bake something delicious",
            "🎿 Let's ski or snowboard",
            "🌉 Recall your favorite holiday",
            "🎉 It's Christmas Eve!"
        ];
    
    // Array of image URLs corresponding to each day
    const images = [
        "https://img.static-rmg.be/a/view/q75/w/h/2017822/hot-jpg.jpg",
        "https://www.usmagazine.com/wp-content/uploads/2023/11/Mariah-Carey-Declares-Its-Time-as-She-Defrosts-for-the-Holidays-1.jpg?w=1600&quality=86&strip=all",
        "https://i.lepelerin.com/2000x1125/smart/2023/12/04/livre.jpeg",
        "https://www.mashed.com/img/gallery/the-best-holiday-cookies-from-around-the-world/l-intro-1640172897.jpg",
        "https://i.pinimg.com/736x/7b/50/d8/7b50d8c9494222b7aa95a4db54197d5c.jpg",
        "https://i.ytimg.com/vi/R5_47whGHJY/maxresdefault.jpg",
        "https://www.wfla.com/wp-content/uploads/sites/71/2019/12/CHRISTMAS-MOVIES-2.jpg?w=1800&h=1350&crop=1",
        "https://people.com/thmb/Dx6dp5-7N7zBvN_jbrbbdWEoA9I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/friends-1-c3324ce17e9841c1b4f720fd320cb7f3.jpg",
        "https://www.billboard.com/wp-content/uploads/2022/12/christmas-candles-holiday-2022-billboard-1548.jpg",
        "https://img.ohmymag.com/alternative/cadeau/cadeaux-de-noel_faade2119fccffe243fd3fede2c9796da55ac6db.jpg",
        "https://cdn-s-www.ledauphine.com/images/70235015-11DE-4208-826A-A03BC59B76DD/SCH_04/la-neige-est-prevue-jusqu-a-basse-altitude-ce-lundi-avant-un-redoux-un-peu-plus-tard-dans-la-semaine-photo-adobe-stock.jpg",
        "https://www.pleinevie.fr/wp-content/uploads/pleinevie/2023/11/shutterstock_2078183239.jpg",
        "https://cdn.sortiraparis.com/images/80/94880/669164-etoiles-filantes.jpg",
        "https://cdn-s-www.lejsl.com/images/3577CC0E-052F-4CFE-A1C9-1C235D4193EB/NW_raw/le-petit-choeur-de-viry-charolles-a-celebrer-noel-sous-les-etoiles-photo-charlotte-faure-1702919452.jpg",
        "https://www.flexilivre.com/images/help/bank-2547356_960_720.jpg",
        "https://th.bing.com/th/id/R.6be994c58e11215093c5e46bf48115ce?rik=XXhreXTCL%2bVTDQ&riu=http%3a%2f%2fwww.atterrir.com%2fwp-content%2fuploads%2f2015%2f11%2fmarche-de-noel-strasbourg-2.jpg&ehk=uPoaSRUALq6OVF70nrctPebvQgC01eAQ8HPoDqsEJdw%3d&risl=&pid=ImgRaw&r=0",
        "https://hips.hearstapps.com/hmg-prod/images/build-a-snowman-decorate-1671039244.jpg?resize=980:*",
        "https://www.familinparis.fr/wp-content/uploads/actualites/decembre/fete-de-noel-FLD.jpg",
        "https://www.unjourunjeu.fr/wp-content/uploads/2020/11/guirlande-noel-5.jpg",
        "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2021/11/jeusociete-noel-1024x576.jpg?key=f6ca9c78",
        "https://tse3.mm.bing.net/th/id/OIP.cfgLghYcmqJLl66XrecZ1AHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://img.redbull.com/images/c_crop,w_2736,h_1824,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/12/04/8e89fbee-f686-4ff3-b680-2b54178fd1b6/switzerland-skiing",
        "https://fabulouswashington.com/wp-content/uploads/sites/4/2023/07/holiday-vacation-planning.jpg",
        "https://cdn.britannica.com/62/147462-050-3C0642C4/front-yard-Christmas.jpg"
    ]

        const calendar = document.getElementById('calendar');
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');

        let modalImage = document.getElementById('modal-image');

        if (!modalImage) {
            modalImage = document.createElement('img');
            modalImage.id = 'modal-image';
            modalImage.className = 'modal-image';
            modalImage.style.maxWidth = '100%';
            modalImage.style.display = 'none';
            modalImage.style.marginTop = '12px';
            modalImage.style.marginBottom = '12px'; 
           
            modalMessage.parentNode.insertBefore(modalImage, modalMessage.nextSibling);
}

        let openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

        //Function to get the current day in December
        function getCurrentDay() {
            const today = new Date();
            const month = today.getMonth() + 1; // 0-11, so +1
            const day = today.getDate();
            
            // Check if we're in December
            if (month === 12) {
                return day;
            }
            return 0; // Not in December
        }

        const currentDay = getCurrentDay();

        // Generate calendar days
        for (let i = 1; i <= 24; i++) {
            const dayBox = document.createElement('div');
            dayBox.className = 'day-box';
            
            const isAvailable = i <= currentDay;
            
            if (openedDays.includes(i)) {
                dayBox.classList.add('opened');
            }
            
            if (!isAvailable) {
                dayBox.classList.add('locked');
            }
            
            dayBox.innerHTML = `
                <div class="day-number">${i}</div>
                <div class="lock-icon">${isAvailable ? '🎁' : '🔒'}</div>
                <div class="surprise">${surprises[i - 1]}</div>
            `;
            
            dayBox.addEventListener('click', () => openDay(i, dayBox, isAvailable));
            calendar.appendChild(dayBox);
        }

            function openDay(day, element, isAvailable) {
    if (!isAvailable) {
        modalTitle.textContent = `Day ${day} 🔒`;
        modalMessage.textContent = `Be patient! This box can only be opened on December ${day}th.`;
        
        if (modalImage) {
            modalImage.style.display = 'none';
            modalImage.src = '';
            modalImage.alt = '';
        }
        modal.classList.add('active');
        return;
    }
    
    
    if (!element.classList.contains('opened')) {
        element.classList.add('opened');
        openedDays.push(day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));
    }
    
    modalTitle.textContent = `Day ${day} 🎁`;
    modalMessage.textContent = surprises[day - 1];
    
    // Set the image for the day
    const imgSrc = images[day - 1] || '';
    if (imgSrc) {
        modalImage.src = imgSrc;
        modalImage.alt = `Image pour le jour ${day}`;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
        modalImage.src = '';
        modalImage.alt = '';
    }
    modal.classList.add('active');
}

        function closeModal() {
            modal.classList.remove('active');
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });