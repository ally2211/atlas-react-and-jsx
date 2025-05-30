
// Section.jsx
export default function Section({ title, children }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
