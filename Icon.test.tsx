import Ionicons from "@expo/vector-icons/Ionicons";
import { render } from "@testing-library/react-native";

it("renders an icon", async () => {
  await render(<Ionicons name="add" size={24} />);
});
