import React from "react";
import { Header, Segment, Table } from "semantic-ui-react";

import Symbol from "../components/Symbol";

import hours from "../data/planetaryHours.json";
import "../styles/hours.css";

export default function Hours() {
  return (
    <Segment>
      <Header as="h2" textAlign="center">
        Planetary Hours
      </Header>
      <Table compact="very" className="ui celled table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="dayHours text-center" colSpan="4">
              Day
            </Table.HeaderCell>
            <Table.HeaderCell
              className="nightHours text-center night"
              colSpan="4"
            >
              Night
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Hour</Table.HeaderCell>
            <Table.HeaderCell>Ruler</Table.HeaderCell>
            <Table.HeaderCell>Start</Table.HeaderCell>
            <Table.HeaderCell>End</Table.HeaderCell>
            <Table.HeaderCell className="night">Hour</Table.HeaderCell>
            <Table.HeaderCell className="night">Ruler</Table.HeaderCell>
            <Table.HeaderCell className="night">Start</Table.HeaderCell>
            <Table.HeaderCell className="night">End</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {hours.map((item, index) => {
            if (index >= 2) {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{item[0]}</Table.Cell>
                  <Table.Cell>
                    <Symbol props={item[1].split(" ")[0]} />
                    {item[1].split(" ")[0]}
                  </Table.Cell>
                  <Table.Cell>{item[2]}</Table.Cell>
                  <Table.Cell>{item[3]}</Table.Cell>
                  <Table.Cell className="night">{item[5]}</Table.Cell>
                  <Table.Cell className="night">
                    <Symbol props={item[6].split(" ")[0]} />
                    {item[6].split(" ")[0]}
                  </Table.Cell>
                  <Table.Cell className="night">{item[7]}</Table.Cell>
                  <Table.Cell className="night">{item[8]}</Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table>
    </Segment>
  );
}
