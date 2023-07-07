const CheckBox = ({state, title, onChange}) => {
    return (
        <div key={title}>
            <input type='checkbox' checked={state} onChange={onChange} />
            <label>{title}</label>
        </div>
    )
}

export default CheckBox;