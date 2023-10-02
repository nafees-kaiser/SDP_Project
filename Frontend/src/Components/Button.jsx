import style from './Button.module.css'

export default function Button({text, change = null, disabled:dis = false}){
    return (
        <>
            {change ? <button className={style.button} onClick={change} disabled={dis}>{text}</button> :
            <button className={style.button}>{text}</button>}
        </>
    );
}