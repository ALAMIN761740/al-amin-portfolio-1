// Sends through the EmailJS REST API, so no extra package is needed.
// These three values are public identifiers, not private keys.
const env = import.meta.env ?? {};

const config = {
  serviceId: env.VITE_EMAILJS_SERVICE_ID,
  templateId: env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
};

export const isEmailConfigured = Object.values(config).every(Boolean);

export async function sendEmail({ name, email, subject, message }) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: { from_name: name, reply_to: email, subject, message },
    }),
  });

  if (!response.ok) throw new Error(`EmailJS responded with ${response.status}`);
}

export function buildMailto(to, { name, email, subject, message }) {
  const body = `${message}\n\nFrom: ${name} (${email})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
