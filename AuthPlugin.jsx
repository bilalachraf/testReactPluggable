import {IPlugin, Event} from "react-pluggable";

class AuthPlugin implements IPlugin {
	namespace = "Auth";

	pluginStore = null;

	getPluginName() {
		return "Auth@1.0.0";
	}

	getDependencies() {
		return [];
	}

	init(pluginStore) {
		this.pluginStore = pluginStore;
	}

	activate() {
		this.pluginStore.addFunction("Auth.authenticate", () => {
			this.pluginStore.dispatchEvent(new Event("Auth.authenticated"));
		});

		this.pluginStore.addFunction("Auth.logout", () => {
			this.pluginStore.dispatchEvent(new Event("Auth.loggedOut"));
		});
	}

	deactivate() {
	}
}

export default AuthPlugin;

