import Marquee from "react-fast-marquee";
// import s from "./marquee.s"
const Marquee = ({children, speed, className}) => {
    
    return(
        <Marquee speed={speed} gradient={false} gradientWidth={0} className={className}>
           {children}
        </Marquee>
    )
}


export default Header;