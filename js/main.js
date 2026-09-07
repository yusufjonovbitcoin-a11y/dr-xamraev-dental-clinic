// =============================================================
// Dental Clinic - GSAP 3 + ScrollTrigger & Interactive Core
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins if available
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  initGsapAnimations();
  initBeforeAfterSliders();
  initPriceCalculator();
  initAppointmentModal();
  initMobileMenu();
  highlightActiveNav();
  initTiltCards();
});

/* -------------------------------------------------------------
 * 1. Active Navigation Highlighting & Mobile Bottom Nav
 * ------------------------------------------------------------- */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Desktop header links
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-brand-600', 'font-bold');
      link.classList.remove('text-slate-600');
    }
  });

  // Mobile bottom navigation items
  document.querySelectorAll('.bottom-nav-item').forEach((item) => {
    const href = item.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      item.classList.add('text-brand-600');
      item.classList.remove('text-slate-400');
      const dot = item.querySelector('.nav-dot');
      if (dot) dot.classList.remove('hidden');
    }

    // Micro-interaction bounce on tap
    item.addEventListener('click', () => {
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(item, { scale: 0.88 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
      }
    });
  });
}

/* -------------------------------------------------------------
 * 2. GSAP Entrance & ScrollTrigger Animations
 * ------------------------------------------------------------- */
function initGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  // 1. Hero Entrance Timeline (if hero exists)
  const heroSection = document.getElementById('heroSection');
  if (heroSection) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl.from('#heroBadge', {
      opacity: 0,
      y: -20,
      duration: 0.6,
      delay: 0.1
    })
    .from('.hero-title-line', {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.8
    }, '-=0.3')
    .from('#heroSubtitle', {
      opacity: 0,
      y: 20,
      duration: 0.7
    }, '-=0.4')
    .from('#heroButtons', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.4')
    .from('#heroTrust', {
      opacity: 0,
      duration: 0.6
    }, '-=0.3')
    .from('#heroCardMain', {
      opacity: 0,
      scale: 0.94,
      y: 30,
      duration: 0.9
    }, '-=0.7')
    .from('.hero-float-badge', {
      opacity: 0,
      scale: 0.7,
      stagger: 0.2,
      duration: 0.7,
      ease: 'back.out(1.8)'
    }, '-=0.4');

    // Continuous floating effect for hero badges
    gsap.to('.hero-float-badge-1', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    gsap.to('.hero-float-badge-2', {
      y: 10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  // 2. Continuous center pulse on mobile bottom nav booking button
  const centerBtn = document.querySelector('.animate-center-btn');
  if (centerBtn) {
    gsap.to(centerBtn, {
      y: -18,
      scale: 1.05,
      boxShadow: '0 14px 28px rgba(14, 165, 233, 0.7)',
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  // 3. ScrollTrigger Section Reveals
  if (typeof ScrollTrigger !== 'undefined') {
    // Reveal all elements with .gsap-reveal
    document.querySelectorAll('.gsap-reveal').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 36,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Stagger reveal for card grids (.gsap-card-group)
    document.querySelectorAll('.gsap-card-group').forEach((group) => {
      const cards = group.querySelectorAll('.gsap-card');
      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power2.out'
        });
      }
    });

    // 4. Animated Number Counters via GSAP
    const statsSection = document.getElementById('statsSection');
    if (statsSection) {
      ScrollTrigger.create({
        trigger: statsSection,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          document.querySelectorAll('.stat-number').forEach((counter) => {
            const targetVal = parseInt(counter.dataset.target, 10) || 0;
            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetVal,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                counter.textContent = new Intl.NumberFormat('uz-UZ').format(Math.round(obj.val));
              }
            });
          });
        }
      });
    }
  }
}

/* -------------------------------------------------------------
 * 3. 50/50 Before / After Comparison Sliders (GSAP Assisted)
 * ------------------------------------------------------------- */
function initBeforeAfterSliders() {
  const containers = document.querySelectorAll('.comparison-container');
  if (!containers.length) return;

  containers.forEach((container) => {
    const afterWrapper = container.querySelector('.comparison-after-wrapper');
    const handle = container.querySelector('.comparison-handle');
    const innerImg = afterWrapper ? afterWrapper.querySelector('.comparison-image') : null;
    if (!afterWrapper || !handle) return;

    let isDragging = false;

    function syncInnerImageWidth() {
      if (innerImg && container.clientWidth > 0) {
        innerImg.style.width = `${container.clientWidth}px`;
      }
    }

    function setSplit(percentage, animated = false) {
      const clamped = Math.max(5, Math.min(95, percentage));
      if (animated && typeof gsap !== 'undefined') {
        gsap.to(afterWrapper, { width: `${clamped}%`, duration: 0.6, ease: 'power2.out' });
        gsap.to(handle, { left: `${clamped}%`, duration: 0.6, ease: 'power2.out' });
      } else {
        afterWrapper.style.width = `${clamped}%`;
        handle.style.left = `${clamped}%`;
      }
    }

    function updateFromClientX(clientX) {
      const rect = container.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      setSplit(percentage, false);
    }

    // Mouse events
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateFromClientX(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateFromClientX(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches && e.touches[0]) {
        updateFromClientX(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        updateFromClientX(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard accessibility
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('role', 'slider');
    handle.setAttribute('aria-valuenow', '50');
    handle.addEventListener('keydown', (e) => {
      const current = parseFloat(afterWrapper.style.width) || 50;
      if (e.key === 'ArrowLeft') {
        setSplit(current - 5, true);
      } else if (e.key === 'ArrowRight') {
        setSplit(current + 5, true);
      }
    });

    // Initialize 50/50 exactly
    setSplit(50, false);
    syncInnerImageWidth();
    window.addEventListener('resize', syncInnerImageWidth);

    // Attention peek animation when user scrolls into view
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: container,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          syncInnerImageWidth();
          // Hint peek: slide slightly to 40%, then 60%, then smoothly back to 50%
          if (typeof gsap !== 'undefined') {
            const peekTl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
            peekTl.to([afterWrapper, handle], { width: (i, t) => t === handle ? '40%' : '40%', left: '40%', duration: 0.5, delay: 0.2 })
                  .to([afterWrapper, handle], { width: (i, t) => t === handle ? '60%' : '60%', left: '60%', duration: 0.6 })
                  .to([afterWrapper, handle], { width: (i, t) => t === handle ? '50%' : '50%', left: '50%', duration: 0.5 });
          }
        }
      });
    }
  });
}

/* -------------------------------------------------------------
 * 4. Interactive Treatment Price Calculator
 * ------------------------------------------------------------- */
function initPriceCalculator() {
  const calcCheckboxes = document.querySelectorAll('.calc-service-item');
  if (!calcCheckboxes.length) return;

  const totalAmountEl = document.getElementById('calcTotalAmount');
  const selectedCountEl = document.getElementById('calcSelectedCount');
  const bookCalcBtn = document.getElementById('bookFromCalcBtn');

  function calculateTotal() {
    let total = 0;
    let count = 0;
    const selectedTitles = [];

    calcCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const price = parseInt(checkbox.dataset.price, 10) || 0;
        const qtyInput = document.getElementById(`qty-${checkbox.id}`);
        const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;

        total += price * qty;
        count++;
        selectedTitles.push(checkbox.dataset.name);
      }
    });

    if (totalAmountEl) {
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(totalAmountEl, { scale: 1.08, color: '#0284c7' }, { scale: 1, color: '#0f172a', duration: 0.35 });
      }
      totalAmountEl.textContent = new Intl.NumberFormat('uz-UZ').format(total) + " so'm";
    }

    if (selectedCountEl) {
      selectedCountEl.textContent = count;
    }

    if (bookCalcBtn) {
      bookCalcBtn.dataset.selectedServices = selectedTitles.join(', ');
    }
  }

  calcCheckboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      const parentCard = cb.closest('.calc-card');
      const qtyWrapper = parentCard ? parentCard.querySelector('.calc-qty-wrapper') : null;
      if (qtyWrapper) {
        qtyWrapper.classList.toggle('hidden', !cb.checked);
        qtyWrapper.classList.toggle('flex', cb.checked);
      }
      calculateTotal();
    });
  });

  document.querySelectorAll('.calc-qty-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;

      let val = parseInt(input.value, 10) || 1;
      if (btn.dataset.action === 'plus') {
        val = Math.min(val + 1, 10);
      } else if (btn.dataset.action === 'minus') {
        val = Math.max(val - 1, 1);
      }
      input.value = val;
      calculateTotal();
    });
  });

  if (bookCalcBtn) {
    bookCalcBtn.addEventListener('click', () => {
      const services = bookCalcBtn.dataset.selectedServices || "Kalkulyatorda tanlangan xizmatlar";
      openAppointmentModal(services);
    });
  }

  calculateTotal();
}

/* -------------------------------------------------------------
 * 5. Online Appointment Modal with Confetti & GSAP Back.out
 * ------------------------------------------------------------- */
function initAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  const modalDialog = document.getElementById('appointmentDialog');
  const closeBtn = document.getElementById('closeModalBtn');
  const form = document.getElementById('appointmentForm');
  const successBox = document.getElementById('bookingSuccess');
  const serviceSelect = document.getElementById('modalServiceSelect');
  const doctorSelect = document.getElementById('modalDoctorSelect');

  window.openAppointmentModal = function (preferredService = '', preferredDoctor = '') {
    if (!modal) return;

    if (preferredService && serviceSelect) {
      let matched = false;
      for (let option of serviceSelect.options) {
        if (preferredService.toLowerCase().includes(option.value.toLowerCase())) {
          option.selected = true;
          matched = true;
          break;
        }
      }
      if (!matched && preferredService) {
        const opt = new Option(preferredService, preferredService, true, true);
        serviceSelect.add(opt);
      }
    }

    if (preferredDoctor && doctorSelect) {
      for (let option of doctorSelect.options) {
        if (option.value.toLowerCase().includes(preferredDoctor.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }

    if (successBox) successBox.classList.add('hidden');
    if (form) form.classList.remove('hidden');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // GSAP dialog pop-in
    if (typeof gsap !== 'undefined' && modalDialog) {
      gsap.fromTo(modalDialog, 
        { opacity: 0, scale: 0.92, y: 30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.7)' }
      );
    }
  };

  window.closeAppointmentModal = function () {
    if (!modal) return;

    if (typeof gsap !== 'undefined' && modalDialog) {
      gsap.to(modalDialog, {
        opacity: 0,
        scale: 0.95,
        y: 15,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
        }
      });
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeAppointmentModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAppointmentModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeAppointmentModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const service = serviceSelect ? serviceSelect.value : '';
      const doctor = doctorSelect ? doctorSelect.value : '';
      const date = document.getElementById('appointmentDate').value;
      const time = document.getElementById('appointmentTime').value;

      if (!name || !phone) {
        alert("Iltimos, ismingiz va telefon raqamingizni kiriting!");
        return;
      }

      const successName = document.getElementById('successPatientName');
      if (successName) successName.textContent = name;
      
      const successDetails = document.getElementById('successDetails');
      if (successDetails) {
        successDetails.textContent = 
          `${service || 'Konsultatsiya'} • ${doctor ? doctor + ' qabuliga' : 'Birinchi bo\'sh mutaxassis'} • ${date || 'Yaqin fursatda'} (${time || 'Ish vaqtida'})`;
      }

      form.classList.add('hidden');
      if (successBox) {
        successBox.classList.remove('hidden');
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(successBox, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' });
        }
      }

      // Celebratory Confetti blast!
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#0ea5e9', '#38bdf8', '#10b981']
        });
      }

      form.reset();
    });
  }

  document.querySelectorAll('.open-booking-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const service = btn.dataset.service || '';
      const doctor = btn.dataset.doctor || '';
      openAppointmentModal(service, doctor);
    });
  });
}

/* -------------------------------------------------------------
 * 6. Mobile Menu Drawer
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.getElementById('closeMobileMenuBtn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  function openMenu() {
    menu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    const drawer = menu.firstElementChild;
    if (typeof gsap !== 'undefined' && drawer) {
      gsap.fromTo(drawer, { x: '100%' }, { x: '0%', duration: 0.35, ease: 'power3.out' });
    }
  }

  function closeMenu() {
    const drawer = menu.firstElementChild;
    if (typeof gsap !== 'undefined' && drawer) {
      gsap.to(drawer, {
        x: '100%',
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          menu.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    } else {
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/* -------------------------------------------------------------
 * 7. 3D Tilt Micro-interactions on Service & Doctor Cards
 * ------------------------------------------------------------- */
function initTiltCards() {
  if (window.innerWidth < 1024) return; // Only desktop

  document.querySelectorAll('.hover-card-rise').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.2s ease-out';
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / (rect.height / 2)) * 5;
      const rotateY = (x / (rect.width / 2)) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.4s ease-out, box-shadow 0.4s ease-out';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}
