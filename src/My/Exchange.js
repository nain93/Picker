import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import Modal from "react-modal";
import { useHistory } from "react-router";

const Container = styled.section`
  background-color: white;
  height: 100%;
  padding: 20px;
  @media screen and (min-width: 0px) {
    font-size: 1rem;
    button,
    input,
    select {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    font-size: 1.2rem;
    button,
    input,
    select {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
    button,
    input,
    select {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    button,
    input,
    select {
      font-size: 1.5rem;
    }
  }
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  padding: 0;
  margin-bottom: 15%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffc000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ExchangeCoinBtn = styled.button`
  background-color: #ffc000;
  color: white;
  margin-top: 5%;
  height: 12vh;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinBtnBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  color: #ffc000;
  margin: 3% 0px;
`;

const SelectStyle = styled.select`
  cursor: pointer;
  border-radius: 10px;
  margin-top: 5%;
  font-size: 1.5rem;
  height: 12vh;
  font-family: inherit;
  background-color: #ffc000;
  width: 100%;
  color: white;
  padding: 0px 6%;
  border: none;
`;

const InputCoin = styled.input`
  background-color: #ffc000;
  border: none;
  font-family: inherit;
  font-size: 1.5rem;
  outline: none;
  color: white;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputBox = styled.div`
  width: 100%;
  height: 12vh;
  margin-top: 5%;
  border-radius: 10px;
  background-color: #ffc000;
  display: flex;
  justify-content: space-between;
  padding: 0px 6%;
  align-items: center;
`;

const ChangBox = styled.div`
  color: #ffc000;
  margin: 4% 0px;
  margin-left: 4%;
`;

const CoinForm = styled.form``;

const ModalStyle = styled.div`
  color: #ffc000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 60%;
  span {
    margin-bottom: 5%;
  }
`;

const ModalBtnStyle = styled.div`
  display: flex;
  flex-direction: column;
  button {
    cursor: pointer;
    height: 7vh;
    margin-bottom: 3%;
    font-size: 1.5rem;
    @media screen and (max-width: 420px) {
      font-size: 1rem;
    }
    border: 1px solid #ffc000;
    color: #ffc000;
    background-color: white;
    border-radius: 10px;
  }
  button:last-child {
    background-color: #ffc000;
    color: white;
  }
`;
Modal.setAppElement("#root");

function Exchange() {
  const [respon, setRespon] = useState({});
  const [coin, setCoin] = useState("SUC");
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCoin(value);
    return;
  };

  const handleResponsive = () => {
    if (window.innerWidth > 1024) {
      setRespon({
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          width: "30%",
          height: "60%",
          fontSize: "1.5rem",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "25px",
        },
      });
      return;
    } else if (window.innerWidth > 420) {
      setRespon({
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          width: "50%",
          height: "60%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "25px",
        },
      });
      return;
    } else {
      setRespon({
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          width: "90%",
          fontSize: "1rem",
          height: "60%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "25px",
        },
      });
      return;
    }
  };

  useEffect(() => {
    handleResponsive();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResponsive);
    return () => window.removeEventListener("resize", handleResponsive);
  }, [respon]);

  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };

  return (
    <Container>
      <GobackBtn onClick={handleGoback}>
        <IoIosArrowBack />
        교환
      </GobackBtn>
      <Header>
        <span>교환할 코인</span>
      </Header>
      <SelectStyle name="coin" onChange={handleChange}>
        <option value="SUC">SUC</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </SelectStyle>

      <CoinForm
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <InputBox>
          <InputCoin placeholder="5" type="number" required />
          <span>{coin}</span>
        </InputBox>
        <ChangBox>
          <span>교환 가능양 : ? {coin}</span>
        </ChangBox>
        <JoinBtnBox>
          <ExchangeCoinBtn onClick={openModal}>교환하기</ExchangeCoinBtn>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={respon}
          >
            <ModalStyle>
              <span>한번 교환하면 다시 교환 x</span>
              <span>교환내역</span>
              <span>before : 100PNT</span>
              <span>after : 5 SUC</span>
            </ModalStyle>
            <ModalBtnStyle>
              <button>안할래</button>
              <button>교환할게</button>
            </ModalBtnStyle>
          </Modal>
        </JoinBtnBox>
      </CoinForm>
    </Container>
  );
}

export default Exchange;
