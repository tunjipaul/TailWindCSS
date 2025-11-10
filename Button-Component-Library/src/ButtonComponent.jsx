function ButtonComponent({ type, children }) {
    const base = "w-full px-4 py-2 rounded font-semibold";

    const styles = {
        primary: "bg-green-600 text-white",
        secondary: "bg-white border border-green-600 text-green-600",
        danger: "bg-red-600 text-white",
        success: "bg-green-500 text-white",
        large: "px-6 py-3 text-lg bg-green-600 text-white",
        small: "px-2 py-1 text-sm bg-green-600 text-white",
    };

    return (
        <button className={`${base} ${styles[type] || ""}`}>{children}</button>
    );
}

export default ButtonComponent;
