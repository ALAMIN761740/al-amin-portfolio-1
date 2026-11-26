import { useState } from 'react';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import SocialLinks from '../components/ui/SocialLinks.jsx';
import { profile } from '../data/profile.js';
import { buildMailto, isEmailConfigured, sendEmail } from '../lib/email.js';
import { validateContact } from '../lib/validation.js';

const EMPTY = { name: '', email: '', subject: '', message: '' };

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
  { name: 'message', label: 'Message', multiline: true },
];

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setStatus({ type: 'idle', text: '' });
      event.target.elements[firstInvalid].focus();
      return;
    }

    if (!isEmailConfigured) {
      if (!profile.email) {
        setStatus({ type: 'error', text: 'Message not sent. This form is not connected to an email address yet.' });
        return;
      }
      window.location.href = buildMailto(profile.email, values);
      setStatus({ type: 'info', text: 'Your email app should open with the message. Press send there to deliver it.' });
      return;
    }

    setStatus({ type: 'loading', text: '' });
    try {
      await sendEmail(values);
      setValues(EMPTY);
      setStatus({ type: 'success', text: 'Message sent. Thank you for getting in touch.' });
    } catch {
      setStatus({ type: 'error', text: 'Message not sent. Check your connection and try again, or email me directly.' });
    }
  }

  return (
    <section id="contact" className="section wrap" tabIndex={-1}>
      <div className="contact">
        <div>
          <SectionHeading number="05" label="Get in touch" title="Let's build something" highlight="together.">
            Have a project idea, collaboration opportunity, or a frontend developer position in mind? Feel free to reach out.
          </SectionHeading>
          <SocialLinks />
        </div>

        <Reveal from="swing-right">
          <form className="form glass" onSubmit={handleSubmit} noValidate>
            {FIELDS.map(({ name, label, multiline, ...input }) => {
              const Control = multiline ? 'textarea' : 'input';
              return (
                <div key={name} className={`field field--${name}`}>
                  <label htmlFor={name}>{label}</label>
                  <Control id={name} name={name} value={values[name]} onChange={handleChange}
                    rows={multiline ? 5 : undefined} required aria-invalid={Boolean(errors[name])}
                    aria-describedby={errors[name] ? `${name}-error` : undefined} {...input} />
                  {errors[name] && <p id={`${name}-error`} className="field__error">{errors[name]}</p>}
                </div>
              );
            })}

            <Button type="submit" variant="primary" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending message…' : 'Send message'}
            </Button>

            <p className={`form__status form__status--${status.type}`} role="status">{status.text}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
