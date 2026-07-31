const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); } });
}, {threshold:0.2});
document.querySelectorAll('.service-card, .curve-divider').forEach(el=>io.observe(el));

document.querySelectorAll('.service-card').forEach((el,i)=>{
  el.style.transitionDelay = (i%3)*0.08 + 's';
});

const CLINIC_WHATSAPP = '919354251664'; // 91 = India country code + clinic number

function sendToWhatsApp(event){
  event.preventDefault();
  const name = document.getElementById('fname').value.trim();
  const phone = document.getElementById('fphone').value.trim();
  const service = document.getElementById('fservice').value;
  const date = document.getElementById('fdate').value;

  let message = `Hi Smile Dental, I'd like to book an appointment.\n\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Service: ${service}\n`;
  if(date){ message += `Preferred date: ${date}\n`; }

  const url = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
