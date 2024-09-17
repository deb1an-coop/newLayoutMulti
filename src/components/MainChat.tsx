import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  InputAdornment,
  Switch,
  SwitchProps,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ContentCopy, Download } from "@mui/icons-material";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 112px);
  height: calc(100vh - 56px);
`;
const ChatHeader = styled(Box)`
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
`;

const ChatBody = styled(Box)`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`;

const ChatInput = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const CustomTextField = styled(TextField)`
  width: 60%;
`;

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({}) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#2ECA45",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "grey",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#39393D",
    opacity: 1,
  },
}));

interface ChatsProps {
  user: string;
  content: string;
}

const Chats: React.FC<ChatsProps> = ({ user, content }) => {
  return (
    <Box
      sx={{
        width: "50%",
      }}
    >
      <Card elevation={0}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{user[0]}</Avatar>}
          title={user}
        />
        <CardContent
          sx={{
            paddingLeft: "72px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            paddingLeft: "64px",
            paddingTop: "32px",
          }}
        >
          <IconButton aria-label="copy">
            <ContentCopy />
          </IconButton>
          <IconButton aria-label="download">
            <Download />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
function App() {
  const messages = [
    { user: "AI Chat", content: "Hello Nawaz! How can I assist you today?" },
    {
      user: "Nawaz Sk",
      content: "Hi! Can you tell me about the weather today?",
    },
    {
      user: "AI Chat",
      content: "Sure! The weather today is sunny with a high of 25°C.",
    },
    {
      user: "Nawaz Sk",
      content: "Great! Can you also provide a brief news update?",
    },
    {
      user: "AI Chat",
      content:
        "Of course! Today's top news is about the global economic summit happening in Geneva.",
    },
    {
      user: "Nawaz Sk",
      content: "Interesting. What are the main topics being discussed?",
    },
    {
      user: "AI Chat",
      content:
        "The main topics include climate change, global trade, and economic recovery post-pandemic.",
    },
    {
      user: "Nawaz Sk",
      content: "Thanks! Can you recommend a good book to read?",
    },
    {
      user: "AI Chat",
      content:
        "I recommend 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari.",
    },
    {
      user: "Nawaz Sk",
      content: "Sounds good! I'll check it out. Thanks for the help!",
    },
  ];
  return (
    <MainContainer>
      <ChatHeader>Chat Header</ChatHeader>
      <ChatBody>
        {messages.map((message, index) => (
          <Chats key={index} user={message.user} content={message.content} />
        ))}
      </ChatBody>
      <ChatInput>
        <CustomTextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={5}
          placeholder="Type a message..."
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IOSSwitch />
                  <IconButton
                    aria-label="send"
                    edge="end"
                    onClick={() => {
                      console.log("Send button clicked");
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </ChatInput>
    </MainContainer>
  );
}

export default App;
