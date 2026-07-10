"use client";

import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ThemeMode } from "@/content/site";

const themeOptions: ReadonlyArray<{
  value: ThemeMode;
  label: string;
  icon: typeof Sun;
}> = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: MonitorCog },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        className="size-10 rounded-lg border border-border bg-background"
        aria-hidden="true"
      />
    );
  }

  return (
    <Select
      value={(theme as ThemeMode | undefined) ?? "system"}
      onValueChange={(value) => setTheme(value)}
    >
      <SelectTrigger
        aria-label="Choose theme"
        className="h-10 w-10 justify-center border-border bg-background p-0 [&>svg:last-child]:hidden"
      >
        <SelectValue>
          {themeOptions.map(({ value, icon: Icon }) =>
            value === theme ? (
              <Icon key={value} className="size-[1.125rem]" aria-hidden="true" />
            ) : null,
          )}
          {!themeOptions.some(({ value }) => value === theme) ? (
            <MonitorCog className="size-[1.125rem]" aria-hidden="true" />
          ) : null}
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end" position="popper">
        {themeOptions.map(({ value, label, icon: Icon }) => (
          <SelectItem key={value} value={value}>
            <Icon aria-hidden="true" />
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
