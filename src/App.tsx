import { Container, Row, Table, Text } from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";
import FormConfigGeneration, {
  FormConfigGenerationFormProps,
} from "./components/FormConfigGeneration ";
import { StudentCSVProps } from "./types/student";
import { convertJSONToCSV, generationListStudent } from "./utils/student-csv";

function App() {
  const [dataStudents, setDataStudents] = useState<StudentCSVProps[]>([]);

  const handleSubmit = async (data: FormConfigGenerationFormProps) => {
    const students = await generationListStudent(data);
    setDataStudents(students);
    const csv = await convertJSONToCSV(students);
    const hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.download = `csv-students-${moment(new Date()).format(
      "YYYY-MM-DD HH-mm-ss"
    )}.csv`;
    hiddenElement.click();
  };

  return (
    <Container className="App" css={{ padding: 24 }} fluid>
      <FormConfigGeneration onSubmit={handleSubmit} />
      <Row css={{ marginBottom: 8, marginLeft: 8 }}>
        <Text h3>List Data</Text>
      </Row>
      <Table
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column align="center">NAME</Table.Column>
          <Table.Column align="center">FIRST NAME</Table.Column>
          <Table.Column align="center">LAST NAME</Table.Column>
          <Table.Column align="center">FIRST NAME PHONETIC</Table.Column>
          <Table.Column align="center">LAST NAME PHONETIC</Table.Column>
          <Table.Column align="center">EMAIL</Table.Column>
          <Table.Column align="center">ENROLLMENT STATUS</Table.Column>
          <Table.Column align="center">GRADE</Table.Column>
          <Table.Column align="center">PHONE NUMBER</Table.Column>
          <Table.Column align="center">BIRTHDAY</Table.Column>
          <Table.Column align="center">GENDER</Table.Column>
          <Table.Column align="center">LOCATION</Table.Column>
        </Table.Header>
        <Table.Body>
          {dataStudents.map((student, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.name}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.first_name}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.last_name}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.first_name_phonetic}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.last_name_phonetic}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.email}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.enrollment_status}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.gender}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.phone_number}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.birthday}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.gender}
                </Table.Cell>
                <Table.Cell css={{ textAlign: "center" }}>
                  {student.location}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default App;
