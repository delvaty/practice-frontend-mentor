/* import './App.css' */
import { Card, Typography } from "antd";
import "./app.scss";
import BackgroundImage from "./assets/img/image-omelette.jpeg";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutritions from "./components/Nutritions";

function App() {
  const { Title, Text } = Typography;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 20,
          width: "100vw",
        }}
      >
        <Card
          style={{
            maxWidth: 650,
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 20,
          }}
        >
          <img
            src={BackgroundImage}
            style={{
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 600,
            }}
          />
          <Title
            style={{ fontSize: 32, padding: 5, marginTop: 20 }}
            className="young-serif-text"
          >
            Simple Omelette Recipe
          </Title>
          <Text className="outfit-text" style={{ fontSize: 15 }}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </Text>
          <div className="prep-time">
            <h2 className="outfit-text" style={{ color: "hsl(332, 51%, 32%)" }}>
              <strong>Preparation time</strong>
            </h2>
            <ul className="list-text">
              <li>
                <strong>Total:</strong> Approximately 10 minutes
              </li>
              <li>
                <strong>Preparation:</strong> 5 minutes
              </li>
              <li>
                <strong>Cooking:</strong> 5 minutes
              </li>
            </ul>
          </div>
          <Ingredients />
          <Instructions />
          <Nutritions />
        </Card>
        <footer>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/learning-paths/getting-started-on-frontend-mentor-XJhRWRREZd/steps/66f284145832c087f20451e7/challenge/start"
            target="_blank"
          >
            Frontend Mentor.
          </a>
          Created by{" "}
          <a href="https://github.com/delvaty" target="_blank">
            delvaty
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
