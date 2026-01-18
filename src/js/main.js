// active 클래스 추가 함수
function misstionActive(element) {
    element.classList.add('active');
    updateMissionCount();
}

// mission-list active 개수 업데이트 함수
function updateMissionCount() {
    const activeMissions = document.querySelectorAll('.mission-list.active');
    const countNumSpan = document.querySelector('.count-num span');
    
    if (countNumSpan) {
        countNumSpan.textContent = activeMissions.length;
    }
}

// 카운트다운 함수
function startCountdown() {
    const $days = document.querySelector('.countdown .days');
    const $hours = document.querySelector('.countdown .hours');
    const $minutes = document.querySelector('.countdown .minutes');
    const $seconds = document.querySelector('.countdown .seconds');
    
    // 종료 시간
    const endTime = new Date('2026-01-24T00:00:00+09:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        $days.textContent = String(days).padStart(2, '0');
        $hours.textContent = String(hours).padStart(2, '0');
        $minutes.textContent = String(minutes).padStart(2, '0');
        $seconds.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
}

// 카운트다운 시작
startCountdown();


// 앵커
document.addEventListener('DOMContentLoaded', () => {
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
                const sectionTop = targetSection.getBoundingClientRect().top;
                const offsetPosition = sectionTop + window.pageYOffset + 50;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
