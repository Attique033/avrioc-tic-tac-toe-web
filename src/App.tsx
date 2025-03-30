import {Provider} from "react-redux";
import {store} from "./store";
import RootRouting from "./router/RootRouting.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";

import NotificationBanner from "./components/notification";

const App = () => {
    return (
        <Provider store={store}>
            <NotificationBanner/>
            <AuthProvider>
                <RootRouting/>
            </AuthProvider>
        </Provider>
    );
};

export default App
