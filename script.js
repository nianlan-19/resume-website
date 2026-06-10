// ========================================
// 导航栏移动端切换
// ========================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // 动画效果
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// 点击导航链接后关闭移动端菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// 导航栏滚动效果
// ========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// 技能进度条动画
// ========================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察技能部分
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// ========================================
// 滚动显示动画
// ========================================
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// 为各元素添加初始状态和观察
document.querySelectorAll('.timeline-item, .project-card, .skill-category, .stat, .contact-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeInObserver.observe(el);
});

// ========================================
// 数字递增动画
// ========================================
function animateNumber(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target === 100 ? '%' : '+');
        }
    }, 16);
}

// 观察统计数字
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberEl = entry.target.querySelector('.stat-number');
            const text = numberEl.textContent;
            const number = parseInt(text);
            
            if (!isNaN(number)) {
                animateNumber(numberEl, number);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// 表单提交处理
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // 这里可以集成后端API或邮件服务
    // 示例：显示成功消息
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '发送中...';
    submitBtn.disabled = true;
    
    // 模拟发送（实际应调用API）
    setTimeout(() => {
        submitBtn.textContent = '✓ 发送成功！';
        submitBtn.style.background = '#10b981';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3000);
    }, 1500);
});

// ========================================
// 平滑滚动（增强版）
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 打字机效果（可选）
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 可以在页面加载时启用打字机效果
// const heroName = document.querySelector('.hero-name');
// typeWriter(heroName, 'QClaw', 150);

// ========================================
// 页面加载完成
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🎉 简历网站加载完成！');
    console.log('💡 提示：可以自定义内容和样式');
});

// ========================================
// 工具函数：节流
// ========================================
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// 响应式：窗口大小调整
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 窗口调整大小后的处理
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }, 250);
});
