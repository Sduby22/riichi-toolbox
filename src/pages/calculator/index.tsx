import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";

const IMG_URL = "https://source.unsplash.com/random";

type ItemProps = {
  header: string;
  content: string;
  imgUrl: string;
  href: string;
};

const MENU_ITEMS: ItemProps[] = [
  {
    header: "calculator.whichToDiscard.header",
    content: "calculator.whichToDiscard.content",
    imgUrl: IMG_URL,
    href: "discard",
  },
  {
    header: "calculator.whichToDiscard.header",
    content: "calculator.whichToDiscard.content",
    imgUrl: IMG_URL,
    href: "discard",
  },
  {
    header: "calculator.whichToDiscard.header",
    content: "calculator.whichToDiscard.content",
    imgUrl: IMG_URL,
    href: "discard",
  },
  {
    header: "calculator.whichToDiscard.header",
    content: "calculator.whichToDiscard.content",
    imgUrl: IMG_URL,
    href: "discard",
  },
  {
    header: "calculator.whichToDiscard.header",
    content: "calculator.whichToDiscard.content",
    imgUrl: IMG_URL,
    href: "discard",
  },
];

function ClickableCard({ header, content, imgUrl, href }: ItemProps) {
  const navigate = useNavigate();
  return (
    <Card sx={{ position: "relative" }} elevation={3}>
      {/* background img */}
      <Box
        sx={{
          position: "absolute",
          display: { xs: "block", sm: "none" },
          // add linear gradient mask image
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.25), rgba(0,0,0,0) 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      >
        <img
          src={imgUrl}
          style={{
            width: "100%",
            margin: "-20px -20px -20px -20px",
          }}
        />
      </Box>
      <ButtonBase
        style={{
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
        }}
        onClick={() => {
          navigate(href);
        }}
      ></ButtonBase>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
        }}
      >
        <div>
          <CardMedia
            image={imgUrl}
            sx={{
              width: 200,
              height: 200,
              display: { xs: "none", sm: "block" },
            }}
          />
        </div>

        <Box sx={{ textAlign: "left" }}>
          <CardHeader title={<FormattedMessage id={header} />} />
          <CardContent>
            <FormattedMessage id={content} />
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}

export default function Calculator() {
  return (
    <Box sx={{ pt: 10, pb: 10, overflow: "hidden" }}>
      <Title titleId="nav.calculator" />
      <Container
        sx={{ display: "flex", flexFlow: "column", gap: 2 }}
        maxWidth="md"
      >
        {MENU_ITEMS.map((item, i) => (
          <ClickableCard key={i} {...item} />
        ))}
      </Container>
    </Box>
  );
}
