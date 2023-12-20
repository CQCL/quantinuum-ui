const modes = ["system", "dark", "light"] as const;
type Mode = (typeof modes)[number];
const isMode = (mode: string): mode is Mode => {
  return ["system", "dark", "light"].includes(mode);
};

const mode_storage_key = "data-theme-mode" as const;

const isDark = (mode: Mode): boolean => {
  return (
    (mode === "system" &&
      window?.matchMedia?.("(prefers-color-scheme: dark)").matches) ||
    mode === "dark"
  );
};

const getTheme = () => {
  const localMode = localStorage.getItem(mode_storage_key);
  const resolvedMode =
    localMode !== null && isMode(localMode) ? localMode : ("system" as const);
  return {
    mode: resolvedMode,
    isDark: isDark(resolvedMode),
  };
};

const setTheme = (mode: Mode) => {
  localStorage.setItem(mode_storage_key, mode);

  window.dispatchEvent(new Event("storage"));
};

const syncDOMClass = () => {
  const theme = getTheme();
  if (theme.isDark) {
    document.documentElement.classList.add("theme-mode-dark");
  } else {
    document.documentElement.classList.remove("theme-mode-dark");
  }
};

const subscribeToTheme = (callback: () => void) => {
  callback();
  window.addEventListener("storage", callback);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", callback);
  };
};

export const theme = {
  get: getTheme,
  set: setTheme,
  subscribe: subscribeToTheme,
  isDark,
  syncTheme: () => subscribeToTheme(syncDOMClass),
};
