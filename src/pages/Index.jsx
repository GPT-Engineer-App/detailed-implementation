import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, HStack, Button, VStack } from "@chakra-ui/react";
import { FaTrash, FaEye, FaExclamationCircle, FaFilter, FaSort } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [data, setData] = useState([
    { id: 1, sender: "John Doe", amount: "€250.00", status: ["EMPFANGEN", "ACTION REQUIRED"], ceoCheck: true },
    { id: 2, sender: "Jane Smith", amount: "€150.00", status: ["ÜBERTRAGEN"], ceoCheck: false },
    { id: 3, sender: "Michael Johnson", amount: "€350.00", status: ["KONTIERT"], ceoCheck: false },
    { id: 4, sender: "Sarah Lee", amount: "€450.00", status: ["ÜBERTRAGEN"], ceoCheck: false },
    { id: 5, sender: "David Kim", amount: "€550.00", status: ["ÜBERTRAGEN"], ceoCheck: false },
  ]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <Container maxW="container.xl" py={10}>
      <HStack justifyContent="flex-end" mb={4}>
        <Button leftIcon={<FaFilter />} colorScheme="teal" variant="outline">Filter</Button>
        <Button leftIcon={<FaSort />} colorScheme="teal" variant="outline">Sort</Button>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Sender</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>CEO-Check</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              <Td>{row.id}</Td>
              <Td>{row.sender}</Td>
              <Td>{row.amount}</Td>
              <Td>
                {row.status.map((status, index) => (
                  <Badge key={index} colorScheme={status === "ACTION REQUIRED" ? "red" : "blue"} mr={1}>
                    {status}
                  </Badge>
                ))}
              </Td>
              <Td>
                <Checkbox isChecked={row.ceoCheck} />
              </Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => handleDelete(row.id)} />
                  <IconButton aria-label="View" icon={<FaEye />} />
                  <IconButton aria-label="Alert" icon={<FaExclamationCircle />} />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Index;