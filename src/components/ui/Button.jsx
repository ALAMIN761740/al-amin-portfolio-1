// Renders a link when `href` is given, otherwise a button.
export default function Button({ href, variant = 'soft', className = '', children, ...props }) {
  const classes = `button button--${variant} ${className}`;

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }
  return <button type="button" className={classes} {...props}>{children}</button>;
}
