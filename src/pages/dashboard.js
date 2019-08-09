import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import StyledPage from "./styled-page";
import Table from "../components/base/table";
import Td from "../components/base/td";

export default function Dashboard({ routes }) {
  return (
    <StyledPage>
      <h1>Dashboard</h1>
      <Table>
        <tbody>
          {routes.map(route => {
            return (
              <tr key={route.name}>
                <Td>
                  <Link to={`/list/${route.path}`}>{route.name}</Link>
                </Td>
                <Td>
                  <Link to={`/quiz/${route.path}`}>Quiz Yourself</Link>
                </Td>
                <Td>
                  <Link to={`/review/${route.path}`}>Review</Link>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </StyledPage>
  );
}

Dashboard.propTypes = {
  routes: PropTypes.array
};
