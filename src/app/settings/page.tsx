import { SettingsTab } from "components/SettingsTab";

export default function settings() {
  return (
    <div className="p-2.5">
      <div className="title">
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>
      <div className="mt-4 ml-4">
        <SettingsTab />
      </div>
    </div>
  );
}
