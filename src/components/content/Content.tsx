import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPageContainer from "../delailPage/DetailPageContainer";

import TodoContainer from '../todo/TodoContainer';

const Content = (props: any) => {
  return  (
    <Routes>
      <Route path={'/details/*'} element={<DetailPageContainer />} />
      <Route path={'/*'} element={<TodoContainer />} />
    </Routes>
  )
}

export default Content