import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import FunBox from "./FunBox";
import PickBox from "./PickBox";
import WalletBox from "./WalletBox";
import Nav from "./Nav";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  svg {
    font-size: 2rem;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const DetailBox = styled.div`
  width: 80%;
  margin-left: 20%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }

  background-color: #fafafa;
`;

const Detail = styled.div`
  padding: 0 2%;
`;

const DetailHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  color: black;
  div {
    width: 22%;
    min-width: 135px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 15vh;
    padding: 1%;
    margin-top: 2%;
    p {
      margin-bottom: 5%;
    }
    p:first-child {
      width: 100%;
    }
    p:nth-child(2) {
      width: 100%;
      text-align: right;
      font-weight: 700;
      font-size: 1.8rem;
      @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
    p:last-child {
      width: 100%;
      text-align: right;
      font-weight: 400;
      font-size: 1rem;
      @media screen and (max-width: 1024px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

const ChartBox = styled.div`
  display: flex;
`;

const BarChartStyle = styled(Chart)`
  height: 100%;
`;

const PieChartStyle = styled(Chart)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BarChartBox = styled.div`
  color: black;
  width: 100%;
  margin: 1% 0;
  margin-right: 2%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const PieChartBox = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1% 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  > div:first-child {
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const PickFunBox = styled.div`
  width: 100%;
  height: 50vh;
  margin: 1% 0;
  display: flex;
  color: black;
`;

function DashBoard() {
  const [barOptions, setBarOptions] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["0"],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
        },
      },
    },
    series: [
      {
        name: "지갑 생성",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "픽 생성",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "FUN 생성",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
  });
  const [pieOptions, setPieOptions] = useState({
    options: {
      labels: ["PNT 보유량", "PNT 교환량", "PNT 충전량"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
      },
    },
    series: [44, 55, 80],
  });

  useEffect(() => {
    const calday = async () => {
      let today = new Date();
      let initDay = new Date(today.setDate(today.getDate() - 14));
      let initMonth = initDay.getMonth() + 1;
      let initDayDate = initDay.getDate();
      let newDay = [`${initMonth}.${initDayDate}`];

      for (let i = 0; i < 14; i++) {
        let afterDay = new Date(today.setDate(today.getDate() + 1));
        let afterDayMonth = afterDay.getMonth() + 1;
        let afterDayDate = afterDay.getDate();
        newDay.push(`${afterDayMonth}.${afterDayDate}`);
      }
      setBarOptions((options) => ({
        ...options,
        options: {
          xaxis: { categories: newDay },
        },
      }));
    };
    calday();
  }, []);
  return (
    <Container>
      <DetailBox>
        <Nav />
        <Detail>
          <DetailHeader>
            <div>
              <p>Total Wallet</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>Total Token</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>Total Pick</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
            <div>
              <p>Total Fun</p>
              <p>21,000,081</p>
              <p>+1,008 (7days)</p>
            </div>
          </DetailHeader>

          <ChartBox>
            <BarChartBox>
              <div>15일간 데이터</div>
              <BarChartStyle
                options={barOptions.options}
                series={barOptions.series}
                type="bar"
                width="950"
                height="500"
              />
            </BarChartBox>

            <PieChartBox>
              <div>PNT</div>
              <PieChartStyle
                options={pieOptions.options}
                series={pieOptions.series}
                type="donut"
                width="450"
              />
            </PieChartBox>
          </ChartBox>
          <WalletBox />
          <PickFunBox>
            <PickBox />
            <FunBox />
          </PickFunBox>
        </Detail>
      </DetailBox>
    </Container>
  );
}

export default DashBoard;
