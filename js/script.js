const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  let data = {
    nome,
    email
  };

  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData);

  let content = document.getElementById('content');

  let sucesso = `<p>Obrigado! Em breve receberá as promoções em seu e-mail.</p>`;

  content.innerHTML = sucesso;
});
