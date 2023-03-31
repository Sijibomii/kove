import s from "./sideheader.module.scss"

const SideHeader = ({}) => {

    return(
        <div className={s.sideheader__container}>
            <div className={s.sideheader__right} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-text-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/> </svg>
            </div>

            <div className={s.sideheader__middle}>
                <h1>Kove</h1>
            </div>
            <div className={s.sideheader__left}>
                <p>
                    <span>high quality fabrics</span>
                    <span>designed & made</span>
                    <span>in iceland</span>
                </p>
            </div>
            
        </div>
    )
}

export default SideHeader;