import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getDiarys } from "../api/diary";
import DiaryItem from "./DiaryItem";

function DiaryList() {
  const { isLoading, isError, data } = useQuery("diarys", getDiarys);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <>
      <ListTitle>
        <h2 style={{ color: "#586a95" }}>- 일기 구경하는 곳 -</h2>
      </ListTitle>
      <StDiarylist>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <DiaryItem item={item} />
            </div>
          );
        })}
      </StDiarylist>
    </>
  );
}

export default DiaryList;

const ListTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const StDiarylist = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 30px;
  border-radius: 50px;
`;
