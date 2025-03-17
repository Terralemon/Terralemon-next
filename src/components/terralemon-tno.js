// modal variables
const previewModal = new bootstrap.Modal(document.getElementById('preview-modal'), {})
const previewModalBody = document.querySelector('#preview-modal .modal-body');

// form variables
const forms = document.querySelectorAll('.needs-validation');
const briefingForm = document.querySelector("#briefing-form");
// form inputs
const briefingTextInputs = briefingForm.querySelectorAll('input[type="text"]') || null;
const briefingEmailInputs = briefingForm.querySelectorAll('input[type="email"]') || null;
const briefingSelectInputs = briefingForm.querySelectorAll('select') || null;
const briefingCheckboxInputs = briefingForm.querySelectorAll('input[type="checkbox"]') || null;
const briefingTextAreaInputs = briefingForm.querySelectorAll('textarea') || null;
const briefingOpleverDatum = briefingForm.querySelector('#opleverDatum') || null;
// const briefingGewensteLengte = briefingForm.querySelector('#gewensteLengte') || null;


// deze functie werkt mee aan dat de eerste optie lichtgrijs is
function changeMe(sel) {
  sel.style.color = "#000";              
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isFormValid() {
  return briefingForm.checkValidity(); 
}

function setFormValidation() {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      form.classList.add('was-validated')
      // check if form is valid, if not prevent form submission
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        return false;
      }

      formPreview(); 
    }, false)
  })
}

// todo: reset form
function formPreview() {
  let formData = collectFormData(); 
  let title;
  console.log(formData)
  // if (formData && isFormValid()) {
  if (formData) {
    for (const [key, value] of Object.entries(formData)) {
      // check title with switch statement and add custom title
      switch (key) {
        case 'opleverDatum':
          title = 'Gewenste opleverdatum';
          break;
        case 'typeAnimatie':
          title = 'Gewenste lengte';
          break;
        case '  TNO organisatie-onderdeel':
          title = 'TNO organisatie onderdeel';
          break;
        case 'beeldelementen':
          title = 'Beeldelementen';
          break;
        case 'stijl':
          title = 'Stijl';
          break;
        case 'afzender':
          title = 'Afzender';
          break;
        case 'beoogd-effect':
          title = 'Beoogd effect';
          break;
        case 'onderwerp':
          title = 'Onderwerp';
          break;
        case 'doelgroep':
          title = 'Doelgroep';
          break;
        case 'context':
          title = 'Context';
          break;
        case 'tno Thema':
          title = 'TNO Thema';
        case 'taal Voiceover':
          title = 'Taal voice-over';
        case 'digi Toegankelijkheid1':
          title = 'Digitoegankelijkheid';
        case 'digi Toegankelijkheid2':
          title = 'Digitoegankelijkheid';
        case 'digi Toegankelijkheid3':
          title = 'Digitoegankelijkheid';
        case 'digi Toegankelijkheid4':
          title = 'Digitoegankelijkheid';
          break;
        default:
          // if no custom title is found, use the key as title
          title = key.replace(/([A-Z])/g, ' $1').trim();
      }

      if (value !== 'undefined' && title) {
        previewModalBody.innerHTML += `
        <div class="col-12">
          <strong class="form-label label preview-key fs-large">${title}</strong>
          <p class="preview-value preview-text" style="margin-bottom: 40px; white-space: pre-wrap; overflow-wrap: break-word;"> ${value}</p>
        </div>`;
      }
    }

    previewModal.show();
  }
}

function collectFormData() {
  // empty data object
  let data = {}; 
  // go over the form and get all the input(s) value
  briefingTextInputs.forEach(input => {
    // if input has value add it to the data object
    if (input.value) {
      data[input.dataset.title] = input.value;
    }
  })
  // go over the form and get all the input(s) value
  briefingEmailInputs.forEach(input => {
    // if input has value add it to the data object
    if (input.value) {
      data[input.dataset.title] = input.value;
    }
  })

  briefingTextAreaInputs.forEach(area => {
    // if input has value add it to the data object
    if (area.value) {
      data[area.dataset.urlTitle] = area.value
    }
  })

  briefingCheckboxInputs.forEach(checkbox => {
    // if input has value add it to the data object
    if (checkbox.checked) {
      // if the id is digitoegaankelijkheid add the value to the data object
      if (checkbox.id === 'digiToegankelijkheid1' || checkbox.id === 'digiToegankelijkheid2' || checkbox.id === 'digiToegankelijkheid3' || checkbox.id === 'digiToegankelijkheid4') {
        data['Digitaletoegankelijkheid'] += `, ${checkbox.value} `
      } else if (checkbox.id === 'vertoningWebsite' || checkbox.id === 'vertoningIntranet' || checkbox.id === 'vertoningLinkedin' || checkbox.id === 'vertoningTwitter' || checkbox.id === 'vertoningInstagram' || checkbox.id === 'vertoningFacebook' || checkbox.id === 'vertoningYoutube' || checkbox.id === 'vertoningEvent' || checkbox.id === 'vertoningTwitter') {
        data['Vertoning op'] += `, ${checkbox.value} `
      }
    }
  })

  briefingSelectInputs.forEach(select => {
    // check if selection is made
    if (select.selectedIndex > 0) {
      data[select.id] = select.options[select.selectedIndex].value
    }
  })

  briefingOpleverDatum && (data[briefingOpleverDatum.id] = briefingOpleverDatum.value)

  // iel
  data['Vertoning op'] ? data['Vertoning op'] = data['Vertoning op'].replace('undefined, ', '') : false;
  data['Digitaletoegankelijkheid'] ? data['Digitaletoegankelijkheid'] = data['Digitaletoegankelijkheid'].replace('undefined, ', '') : false;

  return data
}

const sentBriefing = () => {
  // select the form
  const form = document.querySelector('#briefing-form');
  // submit the form in the background
  fetch(form.action, { method: 'POST', body: new FormData(form) } )
  // redirect the user to the thank you page
  window.location.href = '/tno/thank-you';
}

window.addEventListener('load', () => {
  setFormValidation();
})

document.getElementById('preview-modal').addEventListener('hidden.bs.modal', () => {
  // reset preview (modal-body)
  previewModalBody.innerHTML = '';
})