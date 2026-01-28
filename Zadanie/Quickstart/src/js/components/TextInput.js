export default function TextInput(value, onChange, type = 'text') {
    return(
        <input type={type} value={value} onChange={onChange} />
    )
}