// active 클래스 추가 함수
function misstionActive(element) {
    element.classList.add('active');
}

// 카운트다운
function startCountdown() {
    const daysEl = document.querySelector('.countdown .days');
    const hoursEl = document.querySelector('.countdown .hours');
    const minutesEl = document.querySelector('.countdown .minutes');
    const secondsEl = document.querySelector('.countdown .seconds');
    
    // 일주일 후 시간 설정 (현재 시간 + 7일)
    const endTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// 앵커
document.addEventListener('DOMContentLoaded', () => {
    // 카운트다운 시작
    startCountdown();
    
    const anchorLinks = document.querySelectorAll('.anchor-btn');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // top버튼
            if (this.classList.contains('top')) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
