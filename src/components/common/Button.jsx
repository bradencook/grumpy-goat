import './Button.css';

export default function Button({ children, variant = 'primary', href, onClick, ...props }) {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
