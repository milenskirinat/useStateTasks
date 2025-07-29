import Card from "./components/Card.tsx";
import ToggleCard from "./components/ToggleCard.tsx";
import "./App.css";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher.tsx";
import InputMirror from "./components/InputMirror.tsx";
import FullNameForm from "./components/FullNameForm.tsx";
import ShowDetails from "./components/ShowDetails.tsx";
import TodoList from "./components/TodoList.tsx";
import RemovableTodoList from "./components/RemovableTodoList.tsx";
import MultiCounter from "./components/MultiCounter.tsx";
import EmailForm from "./components/EmailForm.tsx";

function App() {
  return (
    <>
      <div className="components-grid">
        <Card />
        <ToggleCard />
        <ThemeSwitcher />
        <InputMirror />
        <FullNameForm />
        <ShowDetails />
        <TodoList />
        <RemovableTodoList />
        <MultiCounter />
        <EmailForm />
      </div>
    </>
  );
}

export default App;
