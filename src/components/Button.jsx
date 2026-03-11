function Button({text,variant="primary"}){

    const styles = {
        primary: "bg-accent text-white",
        outline : "border border-primary text-primary"
    }

    return(
        <button className={`px-6 py-3 rounded-md font-medium ${styles[variant]}`}>
            {text}
        </button>
    )
}
export default Button