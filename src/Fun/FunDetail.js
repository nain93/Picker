import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { initialData } from "../data/initialData";
import bannerImg from "../img/banner.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./Swiper.css";

const LongContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  color: black;

  @media screen and (min-width: 0px) {
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 321px) {
    font-size: 1rem;
    button {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    button {
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.section`
  padding: 20px;
`;

const GobackBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 100%;
  font-weight: 600;
  color: black;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  margin-left: 5%;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  span {
    margin-bottom: 3%;
  }
  span:first-child {
    font-size: 1rem;
    @media screen and (max-width: 540px) {
      font-size: 0.8rem;
    }
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Icon = styled.div`
  opacity: 0.5;
  display: flex;

  span {
    margin-bottom: 2%;
    margin-right: 2%;
  }
  svg {
    margin-right: 1%;
  }
`;

const SwiperBox = styled.div`
  margin: 5% 0;
`;

const Desc = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 15%;
  margin-bottom: 10%;
`;

const BtnBox = styled.div`
  display: flex;
  margin: 5% 0px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  > div:first-child {
    justify-content: space-around;
    button {
      width: 45%;
      height: 100%;
      svg {
        margin-right: 2%;
      }
    }
  }

  > div:last-child {
    justify-content: flex-end;
    button {
      width: 17%;
      @media screen and (max-width: 768px) {
        width: 25%;
      }
      height: 6vh;
    }
  }
  button {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 40px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SwiperStyle = styled(Swiper)`
  color: "black";
  height: 50vh;
`;

//! page1 css
const Divider = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

const ImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CommentContainer = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:first-child {
    color: #ffc000;
    margin-right: 10%;
  }
  a {
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const CommentMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 0;
  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;
const MainHeader = styled.div`
  width: 100%;
  span {
    font-family: Arial, Helvetica, sans-serif;
  }
  span:first-child {
    margin-right: 5%;
  }
  span:last-child {
    width: 100%;
  }
  div:first-child {
    font-size: 1rem;
    @media screen and (max-width: 540px) {
      font-size: 0.8rem;
    }
  }
  div:last-child {
    margin-top: 1%;
    font-size: 0.8rem;
    opacity: 0.6;
    span:nth-child(2) {
      margin-right: 1%;
    }
  }
`;

const CommentForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  input {
    width: 80%;
    height: 6vh;
    border-radius: 30px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  button {
    border: none;
    cursor: pointer;
    background-color: white;
  }
`;

//! page2 css
const Title = styled.h1`
  color: #ffc000;
  margin: 5% 0px;
`;
const DetailContentBox = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailItem = styled.div`
  width: 100%;
  height: 20vh;
  > div:first-child {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const DescBox = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 3%;
`;

const FunDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  div {
    font-size: 1rem;
  }
  span {
    margin: 3% 0px;
    margin-right: 3%;
  }
  a {
    margin: 3% 0px;
    margin-right: 3%;
  }

  div span:last-child {
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
    div {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
    div {
      font-size: 0.6rem;
    }
  }
`;

const DescBtn = styled.div`
  display: flex;
  button {
    display: flex;
    align-items: center;
    margin: 2% 0px;
    margin-right: 4%;
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  svg {
    margin-right: 5%;
    font-size: 1.5rem;
  }
  span {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 1.2rem;
    }
    svg {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
    span {
      font-size: 0.8rem;
    }
  }
`;

const FunImgBox = styled(Link)`
  width: 35%;
  height: 80%;
  @media screen and (max-width: 1024px) {
    height: 68%;
  }

  @media screen and (max-width: 768px) {
    height: 65%;
  }

  @media screen and (max-width: 320px) {
    height: 60%;
  }
  border-radius: 15px;
  background-position: center center;
  background-size: cover;
`;

const UploadBtnLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0px;
  button {
    cursor: pointer;
    width: 70%;
    height: 6vh;
    border: 1px solid #ffc000;
    border-radius: 35px;
    color: #ffc000;
    background-color: white;
  }
`;

//! page3 css
function FunDetail() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const history = useHistory();

  const handleGoback = () => {
    history.goBack(1);
  };
  return (
    <LongContainer>
      <Container>
        <GobackBtn onClick={handleGoback}>
          <IoIosArrowBack />
          뒤로
        </GobackBtn>
        <Header>
          <Profile>
            <span>{initialData.funItem3.result[0].nickname}</span>
            <span>{initialData.funItem3.result[0].title}</span>
          </Profile>

          <Icon>
            <FaHeart />
            <span>{initialData.funItem3.result[0].likes}</span>
            <BiShare />
            <span>{initialData.funItem3.result[0].share}</span>
            <IoCalendarOutline />
            <span>{initialData.funItem3.result[0].update}</span>
          </Icon>
        </Header>
        <SwiperBox>
          <SwiperStyle
            spaceBetween={20}
            slidesPerView={1.1}
            loop={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
          >
            {initialData.funItem1.result.map((item, idx) => (
              <SwiperSlide
                key={idx}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  color: "black",
                  cursor: "pointer",
                }}
              ></SwiperSlide>
            ))}
          </SwiperStyle>
        </SwiperBox>

        <Desc>
          <span>내용입니다</span>
        </Desc>

        <BtnBox>
          <div>
            <button>
              <FaHeart />
              <span>좋아요</span>
            </button>
            <button>
              <BiShare />
              <span>공유</span>
            </button>
          </div>
          <div>
            <button>
              <GoReport />
            </button>
          </div>
        </BtnBox>
      </Container>

      <Divider>
        <ImgBox src={bannerImg} alt="banner" />
      </Divider>

      <CommentContainer>
        <CommentHeader>
          <div>
            <span>댓글</span>
            <span>100</span>
          </div>
          <div>
            <Link to={`/fun/${initialData.funItem3.result[0].id}`}>
              전체보기 <IoIosArrowForward />
            </Link>
          </div>
        </CommentHeader>

        <CommentMain>
          <MainHeader>
            <div>
              <span>{initialData.funItem3.result[0].nickname}</span>
              <span>ㅋㅋㅋ 기발한 발상</span>
            </div>

            <div>
              <span>{initialData.funItem3.result[0].update}</span>
              <span>좋아요</span>
              <span>{initialData.funItem3.result[0].likes}개</span>
            </div>
          </MainHeader>

          <button>
            <FaHeart />
          </button>
        </CommentMain>
        <CommentMain>
          <MainHeader>
            <div>
              <span>{initialData.funItem3.result[0].nickname}</span>
              <span>ㅋㅋㅋ 기발한 발상</span>
            </div>

            <div>
              <span>{initialData.funItem3.result[0].update}</span>
              <span>좋아요</span>
              <span>{initialData.funItem3.result[0].likes}개</span>
            </div>
          </MainHeader>

          <button>
            <FaHeart />
          </button>
        </CommentMain>
        <CommentMain>
          <MainHeader>
            <div>
              <span>{initialData.funItem3.result[0].nickname}</span>
              <span>ㅋㅋㅋ 기발한 발상</span>
            </div>

            <div>
              <span>{initialData.funItem3.result[0].update}</span>
              <span>좋아요</span>
              <span>{initialData.funItem3.result[0].likes}개</span>
            </div>
          </MainHeader>

          <button>
            <FaHeart />
          </button>
        </CommentMain>
        <CommentForm
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input required></input>
          <button>등록</button>
        </CommentForm>
      </CommentContainer>
      <Container>
        <Title>지금 떠오르는 FUN!</Title>
        <DetailContentBox>
          {initialData.funItem3.result.map((item, idx) => (
            <DetailItem key={idx}>
              <div>
                <FunImgBox
                  to={`/fun/${item.id}`}
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <DescBox>
                  <FunDesc>
                    <Link to={`/fun/${item.id}`}>
                      <span>{item.title}</span>
                    </Link>
                    <div>
                      <span>{item.nickname}</span>
                      <span>{item.update}</span>
                    </div>
                  </FunDesc>
                  <DescBtn>
                    <button>
                      <FaHeart />
                      <span>{item.likes}</span>
                    </button>
                    <button>
                      <BiShare />
                      <span>{item.share}</span>
                    </button>
                  </DescBtn>
                </DescBox>
              </div>
            </DetailItem>
          ))}
        </DetailContentBox>
        <UploadBtnLink to={`/fun/${initialData.funItem3.result[0].id}`}>
          <button>더보기</button>
        </UploadBtnLink>
      </Container>
    </LongContainer>
  );
}

export default FunDetail;
