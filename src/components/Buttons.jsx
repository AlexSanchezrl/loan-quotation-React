function Buttons({valor, fn, style}) {



    return(

        <button type="button" className={style} 
        onClick={fn}
        >{valor}</button>


        

    )
    
}

export default Buttons;