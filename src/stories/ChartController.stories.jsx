import Chartcontroller from "../Chartcontroller";
import "../index.css";

export default {
  title: "contollerChart",
  component: Chartcontroller,
  parameters: {
    backgrounds: {
      default: "shadcn",
      values: [
        { name: "shadcn", value: "#1c1b22" },
        { name: "light", value: "#e3edda" },
      ],
    },
  },
};
export const SomeStyle = () => (
  <Chartcontroller date={"28-10-2023 / Today  "} />
);

export const Primary = {};
