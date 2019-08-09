import React from "react";
import PropTypes from "prop-types";
import datasets from "../data/index";

import StyledPage from "./styled-page";
import Table from "../components/base/table";
import Th from "../components/base/th";
import Td from "../components/base/td";

export default function List({ data }) {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setList(datasets[data]);
    return () => {
      setList([]);
    };
  }, []);

  if (list.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <StyledPage>
      <Table>
        <tbody>
          {list.map((qaObj, i) => {
            return (
              <tr key={i}>
                <Th>{qaObj.q}</Th>
                <Td>{qaObj.a}</Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </StyledPage>
  );
}

List.propTypes = {
  data: PropTypes.string.isRequired
};
