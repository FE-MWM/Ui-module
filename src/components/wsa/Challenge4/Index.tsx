import { DarkModeProvider } from "./context/DarkModeContext";
import Toggle from "./Toggle";

export default function Index() {
  return (
    <DarkModeProvider>
      <Toggle />
    </DarkModeProvider>
  );
}
