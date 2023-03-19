import s from './title.module.scss'

export const  Title  = ({ children, className}) => {
    
    return(
        <span className={className}>
            {children}
        </span>
    )
}

export default Title;