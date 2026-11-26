const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values) {
  const errors = {};

  if (values.name.trim().length < 2) errors.name = 'Enter your full name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address, like name@example.com.';
  if (values.subject.trim().length < 3) errors.subject = 'Add a subject of at least 3 characters.';
  if (values.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.';

  return errors;
}
