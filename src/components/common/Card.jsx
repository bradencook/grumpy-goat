import './Card.css';

export default function Card({ children, variant = 'default', className = '', ...props }) {
  return (
    <div className={`card card--${variant} ${className}`} {...props}>
      {children}
    </div>
  );
}
