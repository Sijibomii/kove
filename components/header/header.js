import s from "./header.module.scss"
import cn from 'clsx'
import { useEffect } from "react"

const Header = ({ headerRectRef, visibile }) => {
    useEffect(() => {
          console.log(visibile)
        }, [visibile])
    return(
        <header className={cn(s.header, visibile && s.visible)} ref={headerRectRef}>
            <div className={s.header__container}>
                <div className="">
                    <h2>Brand</h2>
                </div>
                <div className={s.header__right}>
                    <ul className={s.header__right__list}>
                        <li className={s.header__right__list__item}>
                            <h3>Womens</h3>
                            {/* right arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                        </li>
                        <li className={s.header__right__list__item}>
                            <h3>Mens</h3>
                            {/* right arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                        </li>
                        <li className={s.header__right__list__item}>
                            <h3>SPR22</h3>
                            {/* right arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header;