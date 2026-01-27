function SendMessage() {
  const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("popup")

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_e9k9nnr', 'template_vvxxgir', '#contact-form', 'LorSKzghJjYxn07lf')
  .then(() => {
    contactMessage.textContent = 'Your Message has been Sent! Thank You!'
    contactMessage.style.color = 'Green'
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    contactForm.reset()
  
  }, () => {
    contactMessage.textContent = 'Message not sent (service error)'
  })
}

contactForm.addEventListener('submit', sendEmail)

}






