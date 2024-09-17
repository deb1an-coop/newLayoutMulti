import { Box } from "@mui/material";
import MainChat from "./components/MainChat";
import styled from "@emotion/styled";

const ChatPage = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const Header = styled(Box)`
  background-color: black;
  height: 56px;
`;
const BodyContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 56px);
`;
const SideBar = styled(Box)`
  width: 56px;
  background-color: grey;
`;
const SettingsBar = styled(Box)`
  width: 56px;
  background-color: grey;
`;
function App() {
  return (
    <ChatPage>
      <Header />
      <BodyContainer>
        <SideBar />
        <MainChat />
        <SettingsBar />
      </BodyContainer>
    </ChatPage>
  );
}

export default App;
