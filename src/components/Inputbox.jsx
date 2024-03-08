import { useId } from 'react'

export const Inputbox = ({
    label,
    amount,
    onAmountChange,
    onCurrrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) => {
    const id = useId()
    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                <div className={`w-1-2`}>
                    <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                    {/* <input type="number" id={id} className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(e.target.value)} /> */}
                    <input
                        type="number"
                        id={id}
                        className='outline-none w-full bg-transparent py-1.5'
                        placeholder='Amount'
                        disabled={amountDisabled}
                        value={amount}
                        onChange={(e) => !amountDisabled && onAmountChange(e.target.value)}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className='tetx-black/40 mb-2 w-full'>Currency Type</p>
                    <select
                        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                        id={id}
                        value={selectedCurrency}
                        onChange={(e) => onCurrrencyChange && onCurrrencyChange(e.target.value)}
                        disabled={currencyDisabled}
                    >
                        {currencyOptions.map((cur, ind) => (
                            <option value={cur} key={ind}>{cur}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}
