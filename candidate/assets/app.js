// Shared front-end interactions — no backend, all client-side demo behaviour.

// Filter pill toggle
document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    const group = pill.closest('.filter-row');
    if (!group) return;
    group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

// Support card dismiss
document.querySelectorAll('.support-card .close-x').forEach(btn => {
  btn.addEventListener('click', () => { btn.closest('.support-card').style.display = 'none'; });
});

// Unlock a blurred candidate phone number on click
document.querySelectorAll('[data-unlock]').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('[data-unlock-row]');
    if (!row) return;
    const num = row.querySelector('.locked-number');
    if (num) num.classList.remove('locked-number');
    btn.textContent = 'Call';
    btn.classList.remove('btn-teal');
    btn.classList.add('btn-navy-outline');
  });
});

// OTP input auto-advance (login page)
document.querySelectorAll('.otp-inputs').forEach(group => {
  const inputs = [...group.querySelectorAll('input')];
  inputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1);
      if (input.value && inputs[i + 1]) inputs[i + 1].focus();
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !input.value && inputs[i - 1]) inputs[i - 1].focus();
    });
  });
});

// Login form demo submit -> just prevent reload
document.querySelectorAll('form[data-demo-form]').forEach(form => {
  form.addEventListener('submit', e => e.preventDefault());
});
