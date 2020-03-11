import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 200px;
  flex-direction: column;
  h1{
    margin-bottom:100px;
  }
  div{
    margin-top: 30px;
    label{
      margin-right: 30px;
      padding-right:30px;
    }
    input{
      height:30px;
      width:30px;
      &::placeholder{
        color:#000;
      }
    }
  }
  .Output{
    margin-top: 20px;
    padding-top:20px;
  }
`;
export const Border = styled.div`
  height: 200px;
  width: 200px;
  background: #32f4f2;
  border: 40px solid #7159c1;
  border-radius: ${props=>props.leftTop}px ${props=>props.rightTop}px ${props=>props.rightBottom}px ${props=>props.leftBottom}px
`;
