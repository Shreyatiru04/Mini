import "./Button.css";

export default function Button({ label, onClick, className }) {
    return (
        <div className="buttons">
            <button className={`button ${className}`} onClick={onClick}>
                {label}
            </button>
        </div>
    );
}
