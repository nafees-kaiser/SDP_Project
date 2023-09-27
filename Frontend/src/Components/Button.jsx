import style from './Button.module.css'

export default function Button({text, change = null}){
    return (
        <>
            {change ? <button className={style.button} onClick={change}>{text}</button> :
            <button className={style.button}>{text}</button>}
        </>
    );
}