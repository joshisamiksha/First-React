function InputBox({
    label,
    amount,
    setAmount,
    selectedValue,
    setSelectedValue,
    Currencies = [],
}) {
    return (
        <>
            <div>
                <label>{label}</label>
                <input
                    type="Number"
                    id={label}
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value)
                    }
                    }
                />
                <label>Currency</label>
                <select
                    value={selectedValue}
                    onChange={(e) => {
                        setSelectedValue(e.target.value)
                    }}>
                    {Currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}
export default InputBox;