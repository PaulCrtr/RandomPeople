import { Grid } from "@chakra-ui/layout";

const UsersContainer = ({ childrens }: { childrens?: JSX.Element[] }) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={["30px", "30px", "50px", "40px"]}
      width={["300px", "300px", "650px", "1320px"]}
      alignSelf="center"
      minHeight="100vh"
    >
      {childrens}
    </Grid>
  );
};

export default UsersContainer;
