const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#routine-name').value.trim();
  const duration = document.querySelector('#routine-duration').value.trim();
  const intensity = document.querySelector('#routine-intensity').value.trim();

  if (name && duration && intensity) {
    const response = await fetch(`/api/routine`, {
      method: 'POST',
      body: JSON.stringify({ name, duration, intensity }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create new workout routine');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/routine/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete workout routine');
    }
  }
};

document
  .querySelector('.new-routine-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.routine-list')
  .addEventListener('click', delButtonHandler);