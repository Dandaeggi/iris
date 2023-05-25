import { ipcRenderer } from "electron";

const titlebarContext = {
  exit() {
    ipcRenderer.invoke("window-close");
  },
  undo() {
    ipcRenderer.invoke("web-undo");
  },
  redo() {
    ipcRenderer.invoke("web-redo");
  },
  cut() {
    ipcRenderer.invoke("web-cut");
  },
  copy() {
    ipcRenderer.invoke("web-copy");
  },
  paste() {
    ipcRenderer.invoke("web-paste");
  },
  delete() {
    ipcRenderer.invoke("web-delete");
  },
  select_all() {
    ipcRenderer.invoke("web-select-all");
  },
  reload() {
    ipcRenderer.invoke("web-reload");
  },

  toggle_fullscreen() {
    ipcRenderer.invoke("web-toggle-fullscreen");
  },
  minimize() {
    ipcRenderer.invoke("window-minimize");
  },
  toggle_maximize() {
    ipcRenderer.invoke("window-toggle-maximize");
  },
  open_url(url: string) {
    ipcRenderer.invoke("open-url", url);
  },
  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    ipcRenderer.send("logout");
  },
};

export type TitlebarContextApi = typeof titlebarContext;

export default titlebarContext;
