import styled from "styled-components";
import Hero from "../sections/Hero";


const HugePageDiv = styled.div`
    height: 120svh;
`
export default function Home() {
    return (
        <>
        <Hero/>   
        <HugePageDiv/>
        </>  
    )
}

