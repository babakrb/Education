import Navbar from "../navbar/Navbar";
import styled from "./Header.module.css"
function Header(){
    return(
        <div >
        <div className={styled.header}>
            <span className={styled.date} >November 24,2023</span>  
            <span className={styled.address}>4A Marina Veiw Drive, West harbour, 0618</span>
            <span className={styled.phone}>(+64) 0224227908</span>
            <span className={styled.socialmedia}>facebook , instagram</span>
        </div>
        <Navbar />
        </div>
    )
}

export default Header;


