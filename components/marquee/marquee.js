import Marquee from "react-fast-marquee";
// import s from "./marquee.s"
const Marquee = ({children, speed}) => {
    
    return(
        <Marquee speed={speed} gradient={false} gradientWidth={0}>
           {children}
        </Marquee>
    )
}


export default Header;