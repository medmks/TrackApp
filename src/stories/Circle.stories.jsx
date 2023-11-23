import PerformanceCard from "../Cercle";
import "../index.css";
export default {
  title: "Circle",
  component: PerformanceCard,
  parameters: {
    backgrounds: {
      default: "shadcn",
      values: [
        { name: "shadcn", value: "#1c1b22" },
        { name: "light", value: "#e3edda" },
      ],
    },
  },
  // argTypes:{
  //           variant:{
  //                     control:{
  //                               type:'select'
  //                     },
  //                     options:["green","red","yellow"]

  //           }
  // }
};
export const SomeStyle = () => (
  <PerformanceCard
    percent={60}
    color="text-blue-600"
    title="Project"
    extra="+25%"
  />
);

export const Primary = {
  args: {
    percent: 80,
    color: "text-red-500",
    title: "something",
    extra: "+25%",
    BackColor: "#d7d745",
    TextColor: "#de3535",
    CirleColor: "#1c1b22",
  },
};
