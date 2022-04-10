import React from 'react'
type Props = {
    colors: any[],
    injectColors: (colors: string) => void
}
let selectElem: any;
const InputColor: React.FC<Props> = ({colors, injectColors}) => {
    function onSelect() {
        injectColors(selectElem.value)
    }
    React.useEffect(() => {
        selectElem = document.getElementById('selectInputColor');
    })

return <div>
    <select id='selectInputColor' >
        {colors.map(c => <option value={c.name}>{c.name}</option>)}
    </select>
    <button onClick={onSelect}>GO</button>
    </div>
}
export default InputColor;