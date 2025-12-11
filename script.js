// small interactive behavior
function handleSubmit(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value || 'Friend';
  const email = f.email.value;
  alert(`Thanks ${name}! I'll reach out at ${email} if needed. (Demo form)`);
  f.reset();
}
console.log('Futuristic portfolio loaded');