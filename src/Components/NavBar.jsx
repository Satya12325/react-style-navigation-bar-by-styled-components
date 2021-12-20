
import styled from "styled-components";

const Wrapper=styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    position: relative;
    
`;

const Link=styled.a`
   text-decoration: none;
   color: white;
   font-size: 25px;
   margin-left: 20px;
   margin-right: 20px;
`;
//Create the keyframes


// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


export default function NavBar(){

    return (
       <Wrapper>
           <div className="logo">
            <Rotate >&lt; 💅🏾 &gt;</Rotate>

           </div>
            <br />
           <div className="link">
               <Link>Learn</Link>
               <Link>Resources</Link>
               <Link>About</Link>
           </div>
       </Wrapper>
    );
}