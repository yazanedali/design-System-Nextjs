import Button, { buttoncva } from "./component/ui/Button"
import Input from "./component/ui/Input"
import ThemeChanger from "./component/ui/ThemeChanger"


export default function Home() {
  return (
    <main>
      <ThemeChanger />
      <div className="flex flex-col items-center gap-4 max-w-96 border border-muted p-6 mx-auto my-8 rounded-lg shadow-lg bg-background">
        <Button>Default</Button>
        <Button intent="outline" size="small" fullWidth={false} rounded="full">
          Outline
        </Button>
        <Button intent="primary" size="large" fullWidth={true} rounded="md">
          Primary
        </Button>
        <div className={buttoncva({})}>Hello world</div>
        </div>

      <div className="flex flex-col items-start gap-4 max-w-96 border border-muted p-6 mx-auto my-8 rounded-lg shadow-lg bg-background">
        <Input placeholder="Defult"/>
        <Input intent={'primary'} inputSize={"large"} placeholder="Primary"/>
        <Input intent={'outline'} inputSize={"small"} placeholder="outline"/>
      </div>
  </main>
)
}