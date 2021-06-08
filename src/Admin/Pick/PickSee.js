import React from "react";
import styled from "styled-components";
import { initialData } from "../../data/initialData";

const Container = styled.div`
  width: 65%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;
const SeeHeader = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const SeeGridBox = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr);

  > div {
    display: flex;
    flex-direction: column;
    h1 {
      padding: 10px 20px;
    }
    > div {
      padding: 10px 20px;
      display: flex;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 100%;
    }
  }
  > div:nth-child(2) {
    > diV {
      direction: flex;
      align-items: center;

      div {
        border-radius: 5px;
        background-size: cover;
        background-position: center center;
        width: 40px;
        height: 40px;
      }
    }
  }
  > div:nth-child(3) {
    grid-row: 1;
    grid-column: 3/5;
  }
`;

function PickSee() {
  return (
    <Container>
      <SeeHeader>
        <span>픽 자세히 보기</span>
      </SeeHeader>
      <SeeGridBox>
        <div>
          <h1>No</h1>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
        <div>
          <h1>이미지</h1>
          <div>
            <div
              style={{
                backgroundImage: `url(${initialData.funItem1.result[0].img})`,
              }}
            ></div>
          </div>
          <div>
            <div src={initialData.funItem1.result[1].img}></div>
          </div>
          <div>
            <div src={initialData.funItem1.result[2].img}></div>
          </div>
          <div>
            <div src={initialData.funItem1.result[3].img}></div>
          </div>
          <div>
            <div src={initialData.funItem2.result[0].img}></div>
          </div>
          <div>
            <div src={initialData.funItem2.result[1].img}></div>
          </div>
          <div>
            <div src={initialData.funItem2.result[2].img}></div>
          </div>
          <div>
            <div src={initialData.funItem2.result[3].img}></div>
          </div>
          <div>
            <div src={initialData.funItem3.result[0].img}></div>
          </div>
          <div>
            <div src={initialData.funItem3.result[1].img}></div>
          </div>
        </div>
        <div>
          <h1>질문</h1>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
          <div>질문</div>
        </div>
        <div>
          <h1>대답1</h1>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
          <div>대답1</div>
        </div>
        <div>
          <h1>대답2</h1>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
          <div>대답2</div>
        </div>
      </SeeGridBox>
    </Container>
  );
}

export default PickSee;
