import React from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { removeDiary } from "../api/diary";
import Button from "./Buttons";

function DiaryItem({ item }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(removeDiary, {
    onSuccess: () => {
      queryClient.invalidateQueries("diarys");
    },
  });
  return (
    <>
      <DiaryCade key={item.id}>
        <Diarytext>
          <Author>
            <div style={{ color: "steelblue" }}>{item.author}</div>의 일기
          </Author>
          <Title>
            일기 제목:
            <div style={{ color: "steelblue" }}>{item.title} </div>
          </Title>
          <Content>
            내용:
            <div style={{ color: "steelblue" }}>{item.content} </div>
          </Content>
        </Diarytext>
        <div>
          <Button
            text={"삭제하기"}
            borderColor={"#ff6680"}
            onClick={() => {
              deleteMutation.mutate(item.id);
            }}
          />
          <Button text={"일기 본문 보기"} borderColor={"#7bd486"} />
        </div>
      </DiaryCade>
    </>
  );
}

export default DiaryItem;

const DiaryCade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid steelblue;
  border-radius: 20px;
  width: auto;
  height: auto;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  word-break: break-all;
`;

const Diarytext = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const Author = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Title = styled.div`
  display: flex;
`;
const Content = styled.div``;
