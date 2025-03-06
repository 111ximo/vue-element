import { makeInstaller } from "@vue-element/utils";
import components from "./components";
import '@vue-element/theme/index.css'

const installer=makeInstaller(components);

export * from '@vue-element/components';
export default installer;